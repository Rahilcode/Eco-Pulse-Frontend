import React, { useState } from "react";
import SpanLink from "../components/SpanLink";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { Users } from "../Data/users";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      let user = Users.find((user) => user.email === email);
      if (user && user.password === password) {
        console.log(email, password);
        navigate("/about");
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <>
      <div className="container login-body">
        <div className="row heading">
          <div className="col image-container">
            <Logo />
          </div>

          <div className="col login-container">
            <h2 className="fw-bold mb-4">User Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 field col-8">
                <input
                  type="email"
                  autoFocus
                  required
                  placeholder="Email"
                  className="form-control bg-light fw-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5 field col-8">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="form-control bg-light fw-bold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-4 mb-4 actions">
                <button className="btn button-green fw-bold col-8">
                  Log in
                </button>
              </div>
            </form>

            <SpanLink
              text="New User?"
              link="/user/register"
              linkText="Register"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
