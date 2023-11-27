import React from "react";
import about from "../images/about.jpeg";

const Card = (props) => {
  const { cardData } = props;

  return (
    <div className="col card-div">
      <div className="card" style={{ width: "18rem" }}>
        <img src={cardData.image} alt="Card Image" className="card-img-top" />

        <div className="card-body">
          <h5 className="card-title">{cardData.title}</h5>

          <p className="card-text para-justify">{cardData.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
