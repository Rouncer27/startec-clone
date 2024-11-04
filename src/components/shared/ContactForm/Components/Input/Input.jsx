import "./input.scss";

const Input = ({
  handler,
  value,
  label,
  id,
  type,
  size,
  placeholder,
  error,
  required,
}) => {
  console.log("id: ", id);
  console.log("error: ", error);
  return (
    <div className={`main-form-input main-form-input-${size}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
      </label>
      <input
        name={id}
        type={type}
        onChange={handler}
        value={value}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
