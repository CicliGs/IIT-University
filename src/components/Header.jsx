import { Link } from "react-router-dom";
import logo from "/vite.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Result" />
      <Link to="/">Главная</Link>
      <Link to="/news">Новости</Link>
      <Link to="/schedule">Расписание</Link>
      <li>Студентам</li>
      <li>Преподавателям</li>
    </header>
  );
}
