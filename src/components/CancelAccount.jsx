import React from "react";

const CancelAccount = ({ navigate }) => {
  const handleCancelAccount = () => {
    const response = confirm("Are you sure you want to do that?");
    if (response) {
      navigate("/about");
    }
  };

  return (
    <div className="m-4">
      <h3 className="fw-bold">Cancel my account</h3>
      <div>
        Unhappy?
        <button
          onClick={handleCancelAccount}
          className="btn btn-danger m-2 d-block"
        >
          Cancel my account
        </button>
      </div>
    </div>
  );
};

export default CancelAccount;
