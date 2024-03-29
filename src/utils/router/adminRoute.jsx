import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const role = localStorage.getItem("role");
  return role === "ADMIN" ? (
    <Outlet />
  ) : (
    role === "USER" || role === "TEACHER" ? <h1>У вас нет доступа к этой странице</h1> : <Navigate to="login" />
  );
};

export default AdminRoute;