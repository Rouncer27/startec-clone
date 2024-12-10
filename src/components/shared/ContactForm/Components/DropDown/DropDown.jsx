import React from "react";

const DropDown = ({ options, value, id, handler, label }) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <select value={value} name={id} id={id} onChange={handler}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
