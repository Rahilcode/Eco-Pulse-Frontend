import React from "react";
import Navbar from "../components/Navbar";
import { Notifications } from "../Data/notifications";
import Notify from "../components/notify";

const Notification = () => {
  return (
    <>
      <Navbar />
      <div className="container my-2">
        <h1>Notifications</h1>

        <ul className="list-unstyled">
          {Notifications.map((notification) => {
            return (
              <Notify message={notification.message} date={notification.date} />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Notification;
