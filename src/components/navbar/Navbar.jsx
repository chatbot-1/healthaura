import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar section">
      <div className="nav-container container">
        <div className="navbar">
          <h1 className="logo">The Health.Aura</h1>
          <div className="nav-list">
            <ul>
              <li> Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Health Card</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <i className="uil uil-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
