import React from "react";
import AppointmentInvitation from "./Components/AppointmentInvitation/AppointmentInvitaion";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
// import TailwindNavbar from "./Components/TailwindNavbar/TailwindNavbar";
import Testimonial from "./Components/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Header />

      <Services />
      <AppointmentInvitation />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
