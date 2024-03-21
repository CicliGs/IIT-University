import { Link } from "react-router-dom";
import axios from "axios";
//import "./IITShedule.module.css"
import Header from "../../components/Header/Header";
import styles from "./IITShedule.module.css"
import logo from "/vite.svg";

export default function IITSchedule() {

    const fun = () => {
        //const response = axios.get()//Сделать получение расписания
        console.log("enter")
    }

    const download = () => {
        console.log("download")
    }

    const preview = () => {
        console.log("preview")
    }

    return (
      <>
        {/*<Header />*/}
        <div className={styles.headDiv}>
          
          <Link to="/"><img src={logo} alt="Result" /></Link>
          <div className={styles.headText}>
            <h2 className={styles.Title}>Кафедра Интелектуальных информационных технологий</h2>
          </div>  
        </div>
        <div className={styles.buttons}>
{/*            <button type="button" onClick={download}>Загрузить расписание кафедры .xlsx</button>
            <button type="button" onClick={preview}>Предпросмотр расписания</button>*/}
            <button className={styles.button89}>Загрузить расписание кафедры .xlsx</button>
            <button className={styles.button89}>Предпросмотр расписания</button>
        </div>
      </>
    );
  }