import "./Registration.css";

export default function Registration() {
    return (
      <>
        <div className="Registration">
        <form className="form-reg">
          <h1>Зарегистрироваться</h1>
          <input name="login" type="text" placeholder="Введите логин" />
          <input name="password" type="password" placeholder="Введите пароль" />
          <button type="submit">Регистрация</button>
        </form>
      </div>
      </>
    );
  }