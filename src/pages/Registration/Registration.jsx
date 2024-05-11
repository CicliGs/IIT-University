import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("")

  const [adminChecked, setAdminChecked] = useState(false)
  const [teacherChecked, setTeacherChecked] = useState(false)
  const [userChecked, setUserChecked] = useState(false)

  function handleRegistrationButton() {
    AuthService.registration(username, password, role);
  }

  return (
    <>
      <div className="Registration">
        <div className="form-registration">
          <h1>Регистрация</h1>
          <input
            type="text"
            placeholder="Введите логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegistrationButton}>Регистрация</button>
        </div>

        <label>
          <input
            type="checkbox"
            checked={adminChecked}
            onChange={() => {
              setAdminChecked(!adminChecked)
              setTeacherChecked(false)
              setUserChecked(false)
              setRole("ADMIN")
            }}
          />
          Admin
        </label>
        <label>
          <input
            type="checkbox"
            checked={teacherChecked}
            onChange={() => {
              setAdminChecked(false)
              setTeacherChecked(!teacherChecked)
              setUserChecked(false)
              setRole("TEACHER")
            }}
          />
          Teacher
        </label>
        <label>
          <input
            type="checkbox"
            checked={userChecked}
            onChange={() => {
              setAdminChecked(false)
              setTeacherChecked(false)
              setUserChecked(!userChecked)
              setRole("USER")
            }}
          />
          User
        </label>
      </div>
    </>
  );
};

export default Registration;
