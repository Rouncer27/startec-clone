import React from "react";
import "./textarea.scss";

const Textarea = ({
  handler,
  value,
  label,
  id,
  size,
  placeholder,
  required,
  rows,
  errors,
}) => {
  return (
    <div className={`main-form-textarea main-form-textarea-${size}`}>
      <label htmlFor={id}>
        {label} <span className="required">&#42;</span>
        <textarea
          name={id}
          value={value}
          id={id}
          onChange={handler}
          placeholder={placeholder}
          aria-required={required}
          required={required}
          rows={rows ? rows : "5"}
        />
      </label>
    </div>
  );
};

export default Textarea;
