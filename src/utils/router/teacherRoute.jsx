import { Navigate, Outlet } from "react-router-dom";

const TeacherRoute = () => {
  const role = localStorage.getItem("role");
  return role === "TEACHER" || role === "ADMIN" ? (
    <Outlet />
  ) : (
    role === "USER" ? <h1>У вас нет доступа к этой странице</h1> : <Navigate to="login" />
  );
};

export default TeacherRoute;
