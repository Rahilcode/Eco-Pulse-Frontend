import React from "react";

const SelectBox = ({ text, data, val, setVal }) => {
  return (
    <div className="field col-lg-3 ms-2">
      <select
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="form-select bg-light fw-bold"
      >
        <option value="all">{text}</option>
        {data.map((ele, index) => {
          return (
            <option key={index} value={ele.value}>
              {ele.key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
