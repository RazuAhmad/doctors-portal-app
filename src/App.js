import React from "react";
import AppointmentInvitation from "./Components/AppointmentInvitation/AppointmentInvitaion";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <AppointmentInvitation />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default App;
