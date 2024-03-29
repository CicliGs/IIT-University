import { useState, useContext } from "react"; 
import { Link } from "react-router-dom"; 
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import logo from "/vite.svg"; 
import styles from "./Header.module.css"; 


const Header = () => { 
  const [isActive, setIsActive] = useState(false)
  const [isSheduleHovered, setIsSheduleHovered] = useState(false)
  const [isStudentHovered, setIsStudentHovered] = useState(false)
  const [isTeacherHovered, setIsTeacherHovered] = useState(false)
  const [isProfileHovered, setIsProfileHovered] = useState(false)
  const {store} = useContext(Context)
 
  const handleStudentMouseEnter = () => { 
    setIsStudentHovered(true)
  }
 
  const handleStudentMouseLeave = () => { 
    setIsStudentHovered(false)
  }

  const handleProfileMouseEnter = () => {
    setIsProfileHovered(true)
  }

  const handleProfileMouseLeave = () => {
    setIsProfileHovered(false)
  }
  const handleScheduleMouseEnter = () => {
    setIsSheduleHovered(true)
  }
  const handleScheduleMouseLeave = () => {
    setIsSheduleHovered(false)
  }
 
  return ( 
    <header> 
      <nav className={styles.nav}>  
        <div className={styles.nav__brand}>  
          <img src={logo} alt="Result" />  
        </div>  
        <ul className={styles.nav__menu}>  
          <li className={styles.nav__item}><Link to="/" className={styles.link}>Главная</Link></li>  
          <li className={styles.nav__item}><Link to="/news" className={styles.link}>Новости</Link></li>  
          <li 
            className={styles.nav__item}
            onMouseEnter={handleScheduleMouseEnter}
            onMouseLeave={handleScheduleMouseLeave}
          >
            <div className={styles.link}>Расписание</div>
            {isSheduleHovered && (
              <div className={styles.dropdown}>
                <ul>
                  <li><Link to="/schedule" className={styles.dropdown__link}>Расписание кафедры</Link></li>
                  <li><Link to="/schedule-feis" className={styles.dropdown__link}>Расписание ФЭЙС</Link></li>
                </ul>
              </div>
            )}
          </li> 
          <li 
            className={`${styles.nav__item} ${isStudentHovered && styles.nav__item_active}`} 
            onMouseEnter={handleStudentMouseEnter} 
            onMouseLeave={handleStudentMouseLeave} 
          > 
            <div className={styles.link}>Студентам</div> 
            {isStudentHovered && ( 
              <div className={styles.dropdown}> 
                 <ul> 
                  <li><Link to="/labs" className={styles.dropdown__link}>Лабораторные работы</Link></li> 
                  <li><Link to="/materials" className={styles.dropdown__link}>Материалы для подготовки</Link></li> 
                  <li><Link to="/exam" className={styles.dropdown__link}>Вопросы к экзаменам</Link></li> 
                </ul> 
              </div> 
            )} 
          </li>  
          <li className={styles.nav__item}><Link to="/teachers" className={styles.link}>Преподавателям</Link></li>  
        </ul>  



        <ul className={styles.nav__menu}>
          <li className={`${styles.nav__item} ${isStudentHovered && styles.nav__item_active}`} //////Заменить is StudentHowered
            onMouseEnter={handleProfileMouseEnter} 
            onMouseLeave={handleProfileMouseLeave} >
            
            <div className={styles.link}>{store.isAuth ? `${store.user.username}` : <Link to="/login" className={styles.link}>Войти</Link>}</div>
            {isProfileHovered && store.isAuth ? <div className={styles.dropdown}>
              <ul>
                <li><Link to="/" onClick={() => {store.logout()}} className={styles.dropdown__link}>Выйти</Link></li>
              </ul>
            </div> : <div></div>}
          </li>
        </ul> 
      </nav> 
    </header> 
  ); 
}

export default observer(Header)