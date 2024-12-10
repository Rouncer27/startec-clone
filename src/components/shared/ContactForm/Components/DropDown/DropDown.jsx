import "./dropDown.scss";

const DropDown = ({ options, value, id, handler, label, size }) => {
  return (
    <div className={`main-form-dropdown main-form-dropdown-${size}`}>
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
