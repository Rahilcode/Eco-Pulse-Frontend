import React, { useState } from "react";
import Aipersion from "../images/aiperson.avif";
import ButtonGreen from "../components/ButtonGreen";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { Services } from "../constants/services";
import ServiceCard from "../components/ServiceCard";

const Profile = () => {
  const [services, setServices] = useState(Services);
  const location = useLocation();
  let user = location.pathname.split("/")[1];
  let flag = user === "user";

  return (
    <>
      <Navbar />

      <div className="container my-2">
        <h1 className="text">{flag ? "User" : "Company"} Profile</h1>
        <div className="row">
          <div className="col col-lg-3">
            <img src={Aipersion} alt="profile pic" height={250} width={250} />
          </div>
          <div className="ms-3 col col-lg-8">
            <h1 className="text-capitalize mb-4">
              {flag ? "UserName" : "CompanyName"}
            </h1>
            <h5 className="text-secondary mb-4">Address: Bangalore</h5>
            <h5 className="text-secondary mb-4">
              Email: {flag ? "username@some.com" : "companyname@some.com"}
            </h5>
            <h5 className="text-secondary mb-4">Phone: 1234567890</h5>
            {!flag && (
              <h5 className="text-secondary mb-4">
                Description: some company description
              </h5>
            )}
          </div>
        </div>

        {flag ? (
          <div className="m-4">
            <ButtonGreen
              btnText="Update Profile"
              link="/user/edit"
              addClass="mb-4 col-4 p-2 fs-4"
            />
          </div>
        ) : (
          <div className="m-4 d-flex align-items-center justify-content-center gap-5 px-3">
            <ButtonGreen
              btnText="Update Profile"
              link="/company/edit"
              addClass="fs-4 mb-4 col-6 p-2"
            />
            <ButtonGreen
              btnText="Create Service"
              link="/company/service/post"
              addClass="fs-4 mb-4 button-purple col-6 p-2 text-white"
            />
          </div>
        )}

        {!flag && (
          <div>
            <h1 className="mb-4 fs-2"> Available Services </h1>
            <div className="d-flex justify-content-center align-items-center flex-column">
              {services.map((service, index) => {
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    flag={"false"}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
