import React from "react";
import "./navbar.css";

const Navbar = () => {

  const [show, setShow] = React.useState(false);

  return (
    <div className="navbar section">
      <div className="nav-container container">
        <div className="navbar">
          <h1 className="logo">The Health.Aura</h1>
          <div className="nav-list">
            <ul>
              <li> <a href="#home">Home</a> </li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#health-card">health Card</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <i class="fa-regular fa-user" onClick={() => setShow((prev) => !prev) }></i>
        </div>
        {/* <i class="fa-regular fa-user"></i> */}
      </div>

      {
        show && (
          <div className="user-dropdown">
            <ul>
              <li> <i class="fa-solid fa-user"></i> Profile</li>
              <li><i class="fa-solid fa-right-from-bracket"></i>Log out</li>
            </ul>
        </div>
        )
      }

    </div>
  );
};

export default Navbar;
