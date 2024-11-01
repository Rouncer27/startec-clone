import "./input.scss";

const Input = ({ label, id, type, handler, value, required }) => {
  console.log("INPUT: ", value);
  return (
    <div className="main-form-input">
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
      </label>
      <input name={id} type={type} onChange={handler} value={value} id={id} />
    </div>
  );
};

export default Input;
