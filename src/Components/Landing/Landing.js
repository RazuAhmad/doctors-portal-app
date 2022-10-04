import React from "react";
import "./Landing.css";
import chair1 from "../../assets/images/chair.png";
import clock from "../../assets/icons/clock.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";
const Landing = () => {
  return (
    <div className="landingSection ">
      <div className="landing-container ">
        <div className="landing-title">
          <h2>Your New Smile Starts</h2>
          <h2>Here</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            tenetur assumenda dolor perspiciatis ipsa!
          </p>
          <br />
          <button className="buttonStyle">GET STARTED</button>
        </div>
        <div className="landing-chair1">
          <img src={chair1} alt="chair1" />
        </div>
      </div>
      <div className="appointment ">
        <div className="appointmentChild clockBg col-md-4 col-sm-12">
          <div className="imgIcon">
            <img style={{ height: "30px", width: "30px" }} src={clock} alt="" />
          </div>
          <div className="clockTitle">
            <h2>Opening Hours</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="appointmentChild locationBg col-md-3 col-sm-12">
          <div className="locationIcon ">
            <img
              style={{ height: "40px", width: "40px" }}
              src={location}
              alt=""
            />
          </div>
          <div className="locationTitle">
            <h2>Visit Our location</h2>
            <br />
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="appointmentChild contactBg col-md-3 col-sm-12">
          <div className="contactIcon">
            <img style={{ height: "30px", width: "30px" }} src={phone} alt="" />
          </div>
          <div className="contactTitle">
            <h2>Contact us now</h2>
            <br />
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
