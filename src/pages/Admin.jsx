import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <h1>Admin</h1>
      <Link to="/register">Регистрация</Link>
      <Link to="/admin/users">Пользователи</Link>
    </>
  );
};

export default Admin;
