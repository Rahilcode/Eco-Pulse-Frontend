import React, { useState } from "react";
import Aipersion from "../images/aiperson.avif";
import CompanyInfo from "../images/companyinfo.avif";
import { Link, useNavigate } from "react-router-dom";
import CancelAccount from "../components/CancelAccount";

const UserEditDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    currpassword: "",
    phone: "",
    address: "",
    city: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.currpassword) {
      console.log(formData);
      navigate("/company/about");
    } else {
      alert("Please enter your current password to update details!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row heading">
          <div className="col m-2">
            <h2 className="fw-bold mb-4">Edit Company</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 field d-flex justify-content-center align-items-center">
                <input
                  type="file"
                  className="form-control bg-light border fw-bold m-2"
                />

                <img
                  src={Aipersion}
                  alt="user image"
                  className="rounded-circle"
                  height={100}
                  width={100}
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <i>(leave blank if you don't want to change it)</i>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="password"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <i>(we need your current password to confirm your changes)</i>
                <input
                  type="password"
                  name="currpassword"
                  value={formData.currpassword}
                  onChange={handleChange}
                  placeholder="Current Password"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="form-control bg-light border fw-bold"
                />
              </div>
              <div className="mb-3 field col-8">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Operational City"
                  className="form-control bg-light border fw-bold"
                />
              </div>
              <div className="mb-3 field col-10">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Company Description"
                  id=""
                  cols="30"
                  className="form-control bg-light border fw-bold"
                ></textarea>
              </div>

              <div className="mb-3 field col-8">
                <button className="btn button-green fw-bold col-8">
                  Update Details
                </button>
              </div>
              <Link to="/company/profile" className="btn btn-primary">
                Back
              </Link>
            </form>

            <CancelAccount navigate={navigate} />
          </div>
          <div className="col m-2 edit-img-container">
            <img src={CompanyInfo} alt="Edit Page Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditDetail;
