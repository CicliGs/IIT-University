import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Link to="/login">Login page</Link>
      <Link to="/register">Registration page</Link>
    </>
  );
}
