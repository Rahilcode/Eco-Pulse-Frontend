import React from "react";
import { Link } from "react-router-dom";

const ButtonGreen = ({ btnText, link, addClass }) => {
  let classes = "btn button-green fw-bold ";
  if (addClass) {
    classes += addClass;
  }
  return (
    <Link to={link} className={classes}>
      {btnText}
    </Link>
  );
};

export default ButtonGreen;
