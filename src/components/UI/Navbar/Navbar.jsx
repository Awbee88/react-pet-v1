import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../btn/MyButton";
import { AuthContext } from "../../../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <MyButton onClick={() => setIsAuth(false)}>Logout</MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
}
