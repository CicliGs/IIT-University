import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./IITShedule.module.css";
import axios from "axios";
import logo from "/vite.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import api from "../../http";
import PDFViewer from "../../components/PDFViewer";
import Header from "../../components/Header/Header";

const IITSchedule = () => {
  const { store } = useContext(Context);
  const [drag, setDrag] = useState(false);
  const [view, setView] = useState(false);

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

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("typeSchedule", "iit")
    api.post("http://localhost:8080/api/v1/admin/schedule", formData);

    setDrag(false);
  }

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
        <button
          className={styles.button89}
          onClick={(e) => downloadSchedule(e)}
          >
          Скачать расписание кафедры .xlsx
        </button>
        <button className={styles.button89} onClick={() => {setView(!view)}}>Предпросмотр расписания</button>
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
      ) : (
        <></>
      )}

      <div className={styles.pdfViewer}>
        {view && <PDFViewer fileUrl="http://localhost:8080/api/v1/schedule/pdf/iit"/>}
      </div>
      
      {/*store.user.role === "ADMIN" ? <h1>admin</h1> : <h1>not admin</h1>*/}
      </div>
      </div>
    </>
  );
};

export default observer(IITSchedule);
