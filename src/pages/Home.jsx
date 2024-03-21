import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import Header from "../components/Header/Header";
import Login from "./Login/Login";
import "./Home.css";

const Home = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    console.log("is loading", store.isLoading);
    return <h1>Загрузка ...</h1>;
  }
  if (!store.isAuth) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <h1>
        {store.isAuth
          ? `Пользователь авторизован  ${store.user.username}`
          : "Пользователь не авторизован"}
      </h1>
      {store.isAuth === true ? (
        <Link to="/login" className="link">
          Выйти
        </Link>
      ) : (
        <Link to="/login" className="link">
          Войти
        </Link>
      )}
      <Link>{store.isAuth ? "Выйти" : "Войти"}</Link>
    </>
  );
};

export default observer(Home); //Чтобы mobx мог отслеживать изменение данных
