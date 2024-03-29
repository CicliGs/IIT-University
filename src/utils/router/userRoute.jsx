import { Navigate, Outlet } from "react-router-dom";

const UserRoute = () => {
  const role = localStorage.getItem("role");
  return role === "USER" || role === "TEACHER" || role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="login" />
  );

};

export default UserRoute;
