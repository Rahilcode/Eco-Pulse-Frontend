import React, { useState } from "react";
import { ServicesData } from "../constants/services";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import { useLocation } from "react-router-dom";
import SelectBox from "../components/SelectBox";
import { Locations, Prices, Ratings } from "../constants/selectData";

const Services = () => {
  const [search, setSearch] = useState("");
  const [loc, setLoc] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const location = useLocation();
  let company = location.pathname.split("/")[1];
  let companyFlag = company === "company";

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search, loc, price, rating);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Services</h1>

        <div
          id="services"
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <div className="d-flex justify-content-center col-lg-8 mb-3">
            <div className="field col-lg-7">
              {/* Search bar */}
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control bg-light border rounded fw-bold mb-4"
              />
            </div>
            <SelectBox
              text="Location"
              data={Locations}
              val={loc}
              setVal={setLoc}
            />
            <SelectBox
              text="Price"
              data={Prices}
              val={price}
              setVal={setPrice}
            />
            <SelectBox
              text="Ratings"
              data={Ratings}
              val={rating}
              setVal={setRating}
            />
            <div>
              <button
                onClick={handleSearch}
                className="btn button-green fw-bold ms-1"
              >
                Search
              </button>
            </div>
          </div>
          {ServicesData.map((service) => {
            return !companyFlag ? (
              <ServiceCard key={service.id} service={service} flag="true" />
            ) : (
              <ServiceCard key={service.id} service={service} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
