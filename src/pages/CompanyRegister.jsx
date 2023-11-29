import React, { useState } from "react";
import Logo from "../components/Logo";
import SpanLink from "../components/SpanLink";
import { useNavigate } from "react-router-dom";
import { Companies } from "../Data/companies";

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
    city: "",
    description: "",
  });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.cpassword &&
      formData.phone &&
      formData.address &&
      formData.city &&
      formData.password === formData.cpassword
    ) {
      console.log(formData);
      let company = Companies.find(
        (company) => company.email === formData.email
      );
      if (company) {
        alert("User already Exists");
        setShow(true);
      } else {
        Companies.push(formData);
        console.log(Companies);
        setShow(false);
        navigate("/company/about");
      }
    } else {
      alert("Please Enter all the details correctly!");
      setShow(true);
    }
  };

  return (
    <>
      <div className="container register-body my-3">
        <div className="row heading">
          {show && (
            <h5 className="text-danger">
              Please Enter all the details correctly
            </h5>
          )}
          <div className="col register-container">
            <h2 className="fw-bold mb-4">Company Register</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 field col-8">
                <input
                  type="text"
                  name="name"
                  required
                  autoFocus
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="password"
                  name="password"
                  required
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
                  required
                  value={formData.cpassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="form-control bg-light border fw-bold"
                />
              </div>

              <div className="mb-3 field col-8">
                <input
                  type="number"
                  name="phone"
                  required
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
                  required
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
                  required
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

              <div className="mt-4 mb-4 actions">
                <button className="btn button-green fw-bold col-8">
                  Register
                </button>
              </div>
            </form>

            <SpanLink
              text="Already Registered?"
              link="/company/login"
              linkText="Login"
            />
          </div>
          <div className="col image-container">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
