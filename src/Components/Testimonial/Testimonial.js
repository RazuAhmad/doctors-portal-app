import React from "react";
import "./Testimonial.css";
import patientImg from "../../assets/images/people1.png";
const Testimonial = () => {
  return (
    <div className="testimonialContainer">
      <div className="testimonialHeader" id="reviews">
        <h3 className="testimonialTextColor">Testimonial</h3>
        <h2>What Our Patient Says</h2>
      </div>

      <div className="opinionContainer">
        <div className="opinion">
          <p>
            It is a long established fact that by the <br />
            readable content of a lot layout. The point <br />
            of using Lorem a more-or-less normal <br />
            distribute to using Content here, content
          </p>
          <div className="patientIdentity">
            <p>
              <img src={patientImg} alt="" />
            </p>
            <p>
              Winson Herry <br /> California
            </p>
          </div>
        </div>
        <div className="opinion">
          <p>
            It is a long established fact that by the <br />
            readable content of a lot layout. The point <br />
            of using Lorem a more-or-less normal <br />
            distribute to using Content here, content
          </p>
          <div className="patientIdentity">
            <p>
              <img src={patientImg} alt="" />
            </p>
            <p>
              Winson Herry <br /> California
            </p>
          </div>
        </div>
        <div className="opinion">
          <p>
            It is a long established fact that by the <br />
            readable content of a lot layout. The point <br />
            of using Lorem a more-or-less normal <br />
            distribute to using Content here, content
          </p>
          <div className="patientIdentity">
            <p>
              <img src={patientImg} alt="" />
            </p>
            <p>
              Winson Herry <br /> California
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
