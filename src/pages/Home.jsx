import React from "react";
import Pulse from "../images/Pulse.png";
import ButtonGreen from "../components/ButtonGreen";

const Home = () => {
  return (
    <>
      <div class="container home-container">
        <div class="row heading">
          <div class="col">
            <h1 class="home-heading">How do you want to use Eco Pulse?</h1>
            <div class="d-grid gap-2 col-6 button-group">
              <ButtonGreen btnText="User" />
              <ButtonGreen btnText="Agency/Company" />
            </div>
          </div>
          <div class="col home-img-container">
            <img src={Pulse} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
