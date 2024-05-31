import { useContext, useState, useEffect } from "react";
import styles from "./IITSchedule.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import * as XLSX from "xlsx";
import Header from "../../components/Header/Header";

const IITSchedule = () => {
  const { store } = useContext(Context);
  const [drag, setDrag] = useState(false);
  const [view, setView] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);
  const [teacherName, setTeacherName] = useState("");

  const downloadSchedule = async () => {
    const fileName = "http://localhost:8080/api/v1/schedule/pdf/iit"
      .split("/")
      .pop();
    const aTag = document.createElement("a");
    aTag.href = "http://localhost:8080/api/v1/schedule/pdf/iit";
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const loadSchedule = async () => {
    try {
      const url = "./schedule.xlsx";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonSchedule = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: true, defval: "" });
      setSchedule(jsonSchedule.filter(row => row.some(cell => cell !== ""))); // Удаление пустых строк
    } catch (error) {
      setError(error.message);
      console.error("Error loading schedule:", error);
    }
  };

  useEffect(() => {
    if (view) {
      loadSchedule();
    }
  }, [view]);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  async function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const file = files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("typeSchedule", "iit");
    await api.post("http://localhost:8080/api/v1/admin/schedule", formData);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonSchedule = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: true, defval: "" });
      setSchedule(jsonSchedule.filter(row => row.some(cell => cell !== ""))); // Удаление пустых строк
    };
    reader.readAsArrayBuffer(file);

    setDrag(false);
  }

  const renderTable = () => {
    if (!schedule.length) return null;
  
    const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let dayIndex = -1;
    let dayRowSpan = 0;
  
    const filteredSchedule = schedule.filter((row, rowIndex) => {
      if (rowIndex === 0) return true;
      return teacherName
        ? row.some(cell => cell.toString().toLowerCase().includes(teacherName.toLowerCase()))
        : true;
    });
  
    const transpose = (matrix) => {
      return matrix.reduce((acc, row) => row.map((_, i) => [...(acc[i] || []), row[i]]), []);
    };
  
    const transposeFilteredSchedule = transpose(filteredSchedule);
    const nonEmptyColumns = transposeFilteredSchedule.filter(column => column.some(cell => cell !== ""));
    const cleanedSchedule = transpose(nonEmptyColumns);
  
    const processedRows = cleanedSchedule.map((row, rowIndex) => {
      let isDayCell = false;
      if (daysOfWeek.includes(row[0])) {
        dayIndex++;
        dayRowSpan = 1;
        while (cleanedSchedule[rowIndex + 1 + dayRowSpan] && !daysOfWeek.includes(cleanedSchedule[rowIndex + 1 + dayRowSpan][0])) {
          dayRowSpan++;
        }
        isDayCell = true;
      }
  
      return (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => {
            if (isDayCell && cellIndex === 0) {
              return (
                <td key={cellIndex} rowSpan={dayRowSpan} className={styles.dayCell}>
                  {cell}
                </td>
              );
            }
            if (!isDayCell || cellIndex !== 0) {
              if (cell === "") {
                return <td key={cellIndex} style={{ backgroundColor: "rgb(39, 39, 39)" }} />;
              }
              // Здесь можно добавить логику для форматирования времени
              // Например, вы можете добавить 15 минут к времени
              // Например:
              // const nextTime = addMinutes(cell, 15); // Функция, которая добавляет 15 минут к времени
              // return <td key={cellIndex}>{nextTime}</td>;
              return <td key={cellIndex}>{cell}</td>;
            }
            return null;
          })}
        </tr>
      );
    });
  
    const mergeEmptyCells = (rows) => {
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex];
        if (!row) continue;
        for (let cellIndex = 0; cellIndex < row.props.children.length; cellIndex++) {
          const cell = row.props.children[cellIndex];
          if (cell && cell.props.children === "") {
            let rowSpan = 1;
            for (let i = rowIndex + 1; i < rows.length; i++) {
              const nextRow = rows[i];
              if (!nextRow) continue;
              const nextCell = nextRow.props.children[cellIndex];
              if (nextCell && nextCell.props.children === "") {
                rowSpan++;
              } else {
                break;
              }
            }
            if (rowSpan > 1) {
              row.props.children[cellIndex] = (
                <td key={cellIndex} rowSpan={rowSpan} style={{ backgroundColor: "rgb(39, 39, 39)" }} />
              );
              for (let i = 1; i < rowSpan; i++) {
                rows[rowIndex + i].props.children[cellIndex] = null;
              }
            }
          }
        }
      }
      return rows;
    };
  
    const mergeSubjectCells = (rows) => {
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex];
        if (!row) continue;
        for (let cellIndex = 0; cellIndex < row.props.children.length; cellIndex++) {
          const cell = row.props.children[cellIndex];
          if (cell && typeof cell.props.children === "string") {
            const cellContent = cell.props.children.split("\n");
            if (cellContent.length > 1) {
              let rowSpan = 1;
              for (let i = rowIndex + 1; i < rows.length; i++) {
                const nextRow = rows[i];
                if (!nextRow) continue;
                const nextCell = nextRow.props.children[cellIndex];
                if (nextCell && nextCell.props.children.split("\n")[0] === cellContent[0]) {
                  rowSpan++;
                } else {
                  break;
                }
              }
              if (rowSpan > 1) {
                row.props.children[cellIndex] = (
                  <td key={cellIndex} rowSpan={rowSpan}>
                    {cellContent[0]}
                    <br />
                    {cellContent[1]}
                    <br />
                    {cellContent[2]}
                  </td>
                );
                for (let i = 1; i < rowSpan; i++) {
                  rows[rowIndex + i].props.children[cellIndex] = null;
                }
              }
            }
          }
        }
      }
      return rows;
    };

    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {schedule[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mergeEmptyCells(mergeSubjectCells(processedRows))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div className={styles.back}>
        <Header />
        <div className={styles.content}>
          <div className={styles.headDiv}>
            <div className={styles.headText}>
              <h2 className={styles.Title}>
                Кафедра Интеллектуальных информационных технологий
              </h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button89} onClick={(e) => downloadSchedule(e)}>
              Скачать расписание кафедры .xlsx
            </button>
            <button className={styles.button89} onClick={() => setView(!view)}>
              Предпросмотр расписания
            </button>
          </div>

          {store.user.role === "ADMIN" ? (
            <div className={styles.drag}>
              {drag ? (
                <div
                  className={styles.dropArea}
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                  onDrop={(e) => onDropHandler(e)}
                >
                  Отпустите файлы, чтобы загрузить их
                </div>
              ) : (
                <div
                  className={styles.area}
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                >
                  Перетащите файл расписания, чтобы загрузить его .xlsx
                </div>
              )}
            </div>
          ) : null}

          {error && <div className={styles.error}>Ошибка загрузки: {error}</div>}

          {/* {view && (
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Введите фамилию преподавателя"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>
          )} */}

          {view && renderTable()}
        </div>
      </div>
    </>
  );
};

export default observer(IITSchedule);
