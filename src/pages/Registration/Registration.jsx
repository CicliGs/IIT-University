import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./Registration.css";
import waveTop from "/wave-top.png";
import waveMiddle from "/wave-mid.png";
import waveBottom from "/wave-bot.png";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [adminChecked, setAdminChecked] = useState(false);
  const [teacherChecked, setTeacherChecked] = useState(false);
  const [userChecked, setUserChecked] = useState(false);

  function handleRegistrationButton() {
    AuthService.registration(username, password, role);
  }

  return (
    <>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{ backgroundImage: `url(${waveTop})` }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{ backgroundImage: `url(${waveMiddle})` }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{ backgroundImage: `url(${waveBottom})` }}
          ></div>
        </div>
      </div>
      <div className="Registration">
        <div className="form-registration">
          <div className="form-input">
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
          </div>

          <div className="role">
            <label>
              <input
                type="checkbox"
                checked={adminChecked}
                onChange={() => {
                  setAdminChecked(!adminChecked);
                  setTeacherChecked(false);
                  setUserChecked(false);
                  setRole("ADMIN");
                }}
              />
              Admin
            </label>
            <label>
              <input
                type="checkbox"
                checked={teacherChecked}
                onChange={() => {
                  setAdminChecked(false);
                  setTeacherChecked(!teacherChecked);
                  setUserChecked(false);
                  setRole("TEACHER");
                }}
              />
              Teacher
            </label>
            <label>
              <input
                type="checkbox"
                checked={userChecked}
                onChange={() => {
                  setAdminChecked(false);
                  setTeacherChecked(false);
                  setUserChecked(!userChecked);
                  setRole("USER");
                }}
              />
              User
            </label>
          </div>
          <button onClick={handleRegistrationButton}>Регистрация</button>
        </div>
      </div>
    </>
  );
};

export default Registration;
