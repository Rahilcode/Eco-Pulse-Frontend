import React from "react";
import { ServicesData } from "../constants/services";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import { useLocation } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <h1>Services</h1>

        <div
          id="services"
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <div class="d-flex justify-content-center col-lg-8 mb-3">
            {/* todo - search bar and select feature */}
          </div>
          {ServicesData.map((service) => {
            return <ServiceCard service={service} flag="true" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
