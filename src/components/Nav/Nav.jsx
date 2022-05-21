import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <div className="header-left-icons">
        <Link to="/" className="nav-pill"><p className="header-heading">Amaze-Quiz</p></Link>
      </div>
      <div className="header-right-icons">
        {/* <Link to="/login" className="link">
          Login
        </Link> */}
      </div>
    </header>
  );
};

export { Nav };
