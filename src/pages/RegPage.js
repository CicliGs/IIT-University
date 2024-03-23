import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
    return (
      <>
      <Navbar></Navbar>
        <Link to="/login">Login page</Link>
        <Link to="/register">Registration page</Link>
      </>
    );
  }