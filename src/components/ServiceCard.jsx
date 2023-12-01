import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, flag, onDelete }) => {
  // To implement star ratings
  const [rate, setRate] = useState([]);
  useEffect(() => {
    let newrate = [];
    for (let i = 1; i <= service.ratings; i++) {
      newrate.push(i);
    }
    setRate(newrate);
  }, []);

  return (
    <div className="card w-75 mb-3 bg-light">
      <div className="card-body p-1">
        <div className="row">
          <div className="col-md col-lg-3 d-flex justify-content-center align-items-center">
            <img
              src={service.image}
              alt="service logo"
              height={160}
              width={180}
            />
          </div>

          <div className="col-md">
            <div className="d-md-flex justify-content-between">
              <h2 className="card-title m-0">{service.title}</h2>
              <h2 className="card-title m-0">
                <span className="badge rounded bg-dark price-tag">
                  ₹ {service.price}
                </span>
              </h2>
            </div>
            <h5 className="card-text text-secondary">{service.companyName}</h5>
            <div className="d-flex gap-2">
              <h4>
                <span className="badge bg-black"> {service.city}</span>
              </h4>
            </div>
            <div className="d-flex justify-content-between">
              <h4 className="card-text text-secondary service-type">
                Type: {service.type}
              </h4>

              {service.ratings === 0 ? (
                <div>
                  <h5 className="card-text col-md">Ratings: 0</h5>
                </div>
              ) : (
                <div>
                  <span className="card-text col-md"> Ratings: </span>
                  {rate.map((ele, index) => {
                    return (
                      <i
                        key={index}
                        className="fa-solid fa-star fa-lg my-1"
                        style={{ color: "#ffc800" }}
                      ></i>
                    );
                  })}
                </div>
              )}
            </div>

            {/* render the buttons based on the type of user */}
            {flag && (
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="visually-hidden">3</span>
                  <div className="ms-5 col-md my-2 d-flex"></div>
                </div>
                {flag == "true" ? (
                  <div className="col col-2 my-2">
                    <Link
                      to="/order"
                      className="btn button-green fw-bold ms-lg-4"
                    >
                      Order
                    </Link>
                  </div>
                ) : (
                  <div className="col text-end me-1">
                    <Link
                      to="/company/service/edit"
                      className="btn btn-warning fw-bold me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger fw-bold"
                      onClick={() => onDelete(service.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
