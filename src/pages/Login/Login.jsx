import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="Login">
        <form className="form-log">
          <h1>Войти</h1>
          <input name="login" type="text" placeholder="Введите логин" />
          <input name="password" type="password" placeholder="Введите пароль" />
          <button type="submit">Войти</button>
        </form>
      </div>
    </>
  );
}
