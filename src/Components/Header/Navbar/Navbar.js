import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="portal-title">
        <p>Doctors Portal</p>
      </div>
      <div className="navLinks">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#appointment">Appointment</a>
        </p>
        <p>
          <a href="#reviews">Reviews</a>
        </p>
        <p>
          <a href="#contactUs">Contact Us</a>
        </p>
        <p>
          <a href="#login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
