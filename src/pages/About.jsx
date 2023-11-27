import React from "react";
import Card from "../components/Card";
import { platformData } from "../constants/platformHighlights";

const About = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary jumbo">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold ">ECO PULSE</h1>
          <h1 className="fw-bold fs-3">Connect, Collect, Conserve</h1>
        </div>
      </div>

      <div className="about container">
        <h2 className="fw-bold">About Us: </h2>
        <p className="text text-justify m-2 mb-4">
          At EcoHaul, we are on a mission to transform waste management and
          collection into a sustainable, eco-friendly, and community-driven
          endeavor. Our platform is designed to connect individuals, businesses,
          and recycling agencies, making responsible waste disposal easier and
          more accessible than ever before.
        </p>
      </div>

      <div className="container card-container">
        <h2 className="fw-bold mb-2">Platform Highlights: </h2>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          <Card cardData={platformData[0]} />
          <Card cardData={platformData[1]} />
          <Card cardData={platformData[2]} />
        </div>
      </div>
    </>
  );
};

export default About;
