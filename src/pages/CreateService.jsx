import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateService = () => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    price: "",
    phone: "",
    city: "",
    material: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.name &&
      formData.price &&
      formData.phone &&
      formData.city &&
      formData.material
    ) {
      console.log(formData);
      navigate("/company/services");
    } else {
      alert("Please enter all the details correctly");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="">
          <h1>Create New service</h1>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-wt-img col col-lg-9 col-md-9">
                <div className="mb-3 field col-lg-11">
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="form-control bg-light border fw-bold"
                  />
                </div>

                <div className="mb-3 field col-lg-11">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control bg-light border fw-bold"
                  />
                </div>

                <div className="mb-3 field col-lg-11">
                  <input
                    type="number"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="form-control bg-light border fw-bold"
                  />
                </div>

                <div className="mb-3 field col-lg-11">
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

                <div className="mb-3 field col-lg-11">
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="form-control bg-light border fw-bold"
                  />
                </div>

                <div className="mb-3 field col-lg-11">
                  <input
                    type="text"
                    name="material"
                    required
                    value={formData.material}
                    onChange={handleChange}
                    placeholder="Material"
                    className="form-control bg-light border fw-bold"
                  />
                </div>

                <div className="mb-3 field col-lg-12">
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    id=""
                    cols="30"
                    className="form-control bg-light border fw-bold"
                  ></textarea>
                </div>
              </div>
              <div className="form-with-img col-md col-md-2">
                <label
                  htmlFor="image"
                  className="w-100 h-50 d-flex align-items-center justify-content-center bg-light border-dark fw-bold"
                ></label>
                <input
                  type="file"
                  name="image"
                  className="fw-bold post_img bg-light border m-2 rounded"
                />
              </div>
            </div>

            <div>
              <button className="btn button-green fw-bold">
                Create Service
              </button>
            </div>
          </form>
        </div>

        <div>
          <Link to="/company/services" className="btn btn-dark my-1">
            Back to Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateService;
