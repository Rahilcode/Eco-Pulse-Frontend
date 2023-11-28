import React from "react";

const ButtonGreen = ({ btnText, link, addClass }) => {
  let classes = "btn button-green fw-bold ";
  if (addClass) {
    classes += addClass;
  }
  return (
    <a href={link} className={classes}>
      {btnText}
    </a>
  );
};

export default ButtonGreen;
