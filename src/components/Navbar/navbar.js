import sun from "../../../src/images/icons/sun.svg"
import moon from "../../../src/images/icons/moon.svg"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (    
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>IIT</strong>Department</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"> <Link to="/">Главная</Link></li>
                    <li className="nav-list__item"> <Link to="/">Новости</Link></li>
                    <li className="nav-list__item"> <Link to="/">Расписание</Link></li>
                    <li className="nav-list__item"> <Link to="/login">Студентам</Link></li>
                    <li className="nav-list__item"> <Link to="/login">Преподавателям</Link></li>
                    <li className="nav-list__item"> <Link to="/login">Войти</Link></li>
                </ul>
            </div>
        </div>
    </nav>
 );
}
 
export default Navbar; 
