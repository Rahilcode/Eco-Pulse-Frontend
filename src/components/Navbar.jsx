import React, { useState } from "react";
import Pulse from "../images/Pulse.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="nav-img">
            <img src={Pulse} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-ul navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item">
                <Link to="/about" className="nav-link active fw-bold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active fw-bold">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link active fw-bold">
                  Posts
                </Link>
              </li>
            </ul>
            <ul className="nav-ul navbar-nav ms-4">
              <li className="nav-item me-2">
                <Link to="/notifications">
                  <i className="fa-solid fa-bell position-relative fa-beat">
                    <i
                      className="fa-solid fa-bowling-ball position-absolute start-50 fa-2xs"
                      style={{ color: "#ff0000" }}
                    ></i>
                  </i>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link to="/user/profile" className="nav-link active fw-bold">
                  Profile
                </Link>
              </li>
              {flag ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/user/register"
                      className="nav-link active fw-bold"
                    >
                      Sign Up
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/user/login"
                      onClick={handleClick}
                      className="nav-link active fw-bold"
                    >
                      Log In
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item me-2">
                  <button
                    onClick={handleClick}
                    className="nav-link active fw-bold"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
