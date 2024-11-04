import "./formModals.scss";
import ErrorIcon from "./ErrorIcon";

const ErrorModal = ({ handleErrorModalClose }) => {
  return (
    <div className="form-modal error-modal">
      <div className="form-modal-inner error-modal-inner">
        <div className="form-modal-inner-icon error-modal-inner-icon">
          <ErrorIcon />
        </div>
        <div className="form-modal-inner-content error-modal-inner-content">
          <p>Error With The Contact Form!</p>
        </div>
        <div className="form-modal-inner-button error-modal-inner-button">
          <button onClick={handleErrorModalClose}>Close</button>
        </div>
      </div>
      <div className="form-modal-background error-modal-background" />
    </div>
  );
};

export default ErrorModal;
