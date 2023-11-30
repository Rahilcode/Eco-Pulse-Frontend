import React from "react";

const Notify = ({ date, message }) => {
  return (
    <li className="bg-primary text-light fw-bold p-2 pb-1 m-2 border rounded">
      <span>Sent at: {date}</span>
      <p>{message}</p>
    </li>
  );
};

export default Notify;
