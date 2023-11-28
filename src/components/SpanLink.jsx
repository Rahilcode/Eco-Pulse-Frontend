import React from "react";
import { Link } from "react-router-dom";

const SpanLink = ({ text, link, linkText }) => {
  return (
    <div className="col-8 text-center">
      <span className="text fw-bold ml-4">{text} </span>
      <Link to={link} className="text-decoration-none fw-bold">
        {text}
      </Link>
    </div>
  );
};

export default SpanLink;
