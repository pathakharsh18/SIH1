import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <div className="nav-buttons">
        <Link to="/login"><button className="nav-btn">Login</button></Link>
        <Link to="/signup"><button className="nav-btn">Signup</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;