import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header class="header">
      <div class="header-left-icons">
        <Link to="/" className="nav-pill"><p class="header-heading">Amaze-Quiz</p></Link>
      </div>
      <div class="header-right-icons">
        <Link to="/rules" class="link" >
          Rules
        </Link>
        <Link to="/login" class="link">
          Login
        </Link>
      </div>
    </header>
  );
};

export { Nav };
