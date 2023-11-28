import React, { useState } from "react";
import Pulse from "../images/Pulse.png";

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
          <a href="/" className="nav-img">
            <img src={Pulse} alt="Logo" />
          </a>
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
                <a href="/about" className="nav-link active fw-bold">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link active fw-bold">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/posts" className="nav-link active fw-bold">
                  Posts
                </a>
              </li>
            </ul>
            <ul className="nav-ul navbar-nav ms-4">
              <li className="nav-item me-2">
                <a href="/notifications">
                  <i className="fa-solid fa-bell position-relative fa-beat">
                    <i
                      className="fa-solid fa-bowling-ball position-absolute start-50 fa-2xs"
                      style={{ color: "#ff0000" }}
                    ></i>
                  </i>
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="/user/profile" className="nav-link active fw-bold">
                  Profile
                </a>
              </li>
              {flag ? (
                <>
                  <li class="nav-item">
                    <a href="/register" className="nav-link active fw-bold">
                      Sign Up
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      href="/register"
                      onClick={handleClick}
                      className="nav-link active fw-bold"
                    >
                      Log In
                    </a>
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