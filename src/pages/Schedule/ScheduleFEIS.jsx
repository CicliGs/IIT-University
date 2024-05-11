import { useState } from "react";
import styles from "./ScheduleFEIS.module.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../../components/Header/Header";

const ScheduleFEIS = () => {
  const [course, setCourse] = useState(0);
  const downloadScheduleFeis = (type) => {
    let fileName = "";
    switch (type) {
      case 1:
        fileName = "feis1";
        break;
      case 2:
        fileName = "feis2";
        break;
      case 3:
        fileName = "feis3";
        break;
      case 4:
        fileName = "feis4";
        break;
      default:
        console.error("Неизвестный тип файла");
    }
    const aTag = document.createElement("a");
    aTag.href = `http://localhost:8080/api/v1/schedule/${fileName}`;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <>
          <Header />
    <div className={styles.container}>
      <div className={styles.headDiv}>
        <h2 className={styles.tytle}>Расписание ФЭИС</h2>
      </div>

      <div className={styles.button}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Выберите курс
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => setCourse(1)}>1 курс</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCourse(2)}>2 курс</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCourse(3)}>3 курс</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCourse(4)}>4 курс</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={styles.button}>
        {course === 1 ? (
          <Button onClick={(e) => downloadScheduleFeis(1)}>
            Загрузить расписание 1 курс .xlsx
          </Button>
        ) : (
          <></>
        )}
        {course === 2 ? (
          <Button onClick={(e) => downloadScheduleFeis(2)}>
            Загрузить расписание 2 курс .xlsx
          </Button>
        ) : (
          <></>
        )}
        {course === 3 ? (
          <Button onClick={(e) => downloadScheduleFeis(3)}>
            Загрузить расписание 3 курс .xlsx
          </Button>
        ) : (
          <></>
        )}
        {course === 4 ? (
          <Button onClick={(e) => downloadScheduleFeis(4)}>
            Загрузить расписание 4 курс .xlsx
          </Button>
        ) : (
          <></>
        )}
      </div>
        </div>
    </>
  );
};

export default ScheduleFEIS;
