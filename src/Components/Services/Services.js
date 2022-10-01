import React from "react";
import "./Services.css";
import fluorideImg from "../../assets/images/fluoride.png";
import cavityImg from "../../assets/images/cavity.png";
import teethImg from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesIntro">
        <h3>OUR SERVICES</h3>
        <h2>Services We Provide</h2>
      </div>

      {/* Treatment container(All the treatment items can be found here) */}
      <div className="TreatmentContainer">
        <div className="treatmentItem">
          <p>
            <img src={fluorideImg} alt="" />
          </p>
          <h3>Fluoride Treatment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            modi tempore at fugiat?
          </p>
        </div>
        <div className="treatmentItem">
          <p>
            <img src={cavityImg} alt="" />
          </p>
          <h3>Cavity Filling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            eveniet voluptate nemo odit.
          </p>
        </div>
        <div className="treatmentItem">
          <p>
            <img src={teethImg} alt="" />
          </p>
          <h3>Teeth Whitening</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            quisquam eaque laudantium corporis!
          </p>
        </div>
      </div>
      <div className="treatmentSummary">
        <div className="treatmentImg">
          <img src={treatment} alt="Treatment" />
        </div>
        <div className="treatmentTexts">
          <h2>Exceptional Dental</h2>
          <h2>Care, on Your Terms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout. The point{" "}
            <br />
            of using Lorem Ipsumis that it has a more-or-less normal <br />
            distribution of letters, as opposed to using 'Content here, content{" "}
            <br />
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <br />
          <button className="buttonStyle">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
