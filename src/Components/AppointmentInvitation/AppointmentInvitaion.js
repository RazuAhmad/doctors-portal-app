import React from "react";
import "./AppointmentInvitation.css";
import doctorsPhoto from "../../assets/images/doctor-small.png";
const AppointmentInvitation = () => {
  return (
    <div className="appointmentInvitationContainer" id="appointment">
      <div className="doctorsImg">
        <img src={doctorsPhoto} alt="" />
      </div>
      <div className="appointmentTexts">
        <h3>Appointment</h3>
        <h2>Make an appointment Today</h2>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the{" "}
          <br />
          readable content of a page when looking at its layout. The point of{" "}
          <br />
          using Lorem Ipsumis that it has a more-or-less normal distribution of{" "}
          <br />
          letters,as opposed to using 'Content here, content here', making it
          look <br />
          like readable English. Many desktop publishing packages and web page
        </p>
        <br />
        <button className="buttonStyle">GET STARTED</button>
      </div>
    </div>
  );
};

export default AppointmentInvitation;
