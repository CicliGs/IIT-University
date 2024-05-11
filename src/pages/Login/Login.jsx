import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import "./Login.css";
import waveTop from "/wave-top.png";
import waveMiddle from "/wave-mid.png";
import waveBottom from "/wave-bot.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

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
    <div className="Login">
      <div className="form-log">
        <h1>Войти</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Введите логин"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Введите пароль"
        />
        <button
          onClick={() => {
            store.login(username, password);
            navigate("/");
          }}
        >
          Войти
        </button>
      </div>
    </div>
  </>
  );
};

export default observer(Login);
