import { Link } from "react-router-dom";

export default function Home() {
    return (
      <>
        <Link to="/login">Login page</Link>
        <Link to="/register">Registration page</Link>
      </>
    );
  }