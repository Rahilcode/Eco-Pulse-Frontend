import React from "react";

const SpanLink = ({ text, link, linkText }) => {
  return (
    <div className="col-8 text-center">
      <span className="text fw-bold ml-4">{text} </span>
      <a href={link} className="text-decoration-none fw-bold">
        {linkText}
      </a>
    </div>
  );
};

export default SpanLink;
