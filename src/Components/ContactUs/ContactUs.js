import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <form className="contactUsContainer" id="contactUs">
      <h3>Contact Us</h3>
      <h2>Stay Connected With Us</h2>
      <br />
      <p>
        <input placeholder="Email Address" type="email" name="email" id="" />
      </p>
      <br />
      <p>
        <input placeholder="Subject" type="text" name="Subject" id="" />
      </p>
      <br />
      <p>
        <input
          type="textArea"
          placeholder="Your message"
          name="message"
          id=""
        />
      </p>
      <br />

      <input className="submit" type="submit" value="SUBMIT" />
    </form>
  );
};

export default ContactUs;
