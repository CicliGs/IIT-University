import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
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
