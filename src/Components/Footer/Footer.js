import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerContainer" id="about">
        <div className="services">
          <h2>SERVICES</h2>
          <br />
          <p>Emergency Checkup</p>
          <p>Monthly Checkup</p>
          <p>Weekly Checkup</p>
          <p>Deep checkup</p>
        </div>
        <div className="oralHealth">
          <h2>ORAL HEALTH</h2>
          <br />
          <p>Fluoride Treatment</p>
          <p>Cavity Filling</p>
          <p>Teeth Whitening</p>
        </div>
        <div className="ourAddress">
          <h2>OUR ADDRESS</h2>
          <br />
          <p>New York- 101010 Hudson</p>
        </div>
      </div>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Copyright 2022 All Rights Reserved
      </h3>
    </>
  );
};

export default Footer;
