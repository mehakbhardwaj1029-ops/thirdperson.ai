import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          Third Person
        </div>

        <div className="nav-actions">
          <button className="btn-signin">Sign in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
