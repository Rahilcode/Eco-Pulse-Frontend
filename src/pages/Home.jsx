import React from "react";
import Pulse from "../images/Pulse.png";
import ButtonGreen from "../components/ButtonGreen";

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="row heading">
          <div className="col">
            <h1 className="home-heading">How do you want to use Eco Pulse?</h1>
            <div className="d-grid gap-2 col-6 button-group">
              <ButtonGreen btnText="User" />
              <ButtonGreen btnText="Agency/Company" />
            </div>
          </div>
          <div className="col home-img-container">
            <img src={Pulse} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
