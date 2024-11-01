const ErrorModal = ({ handleErrorModalClose }) => {
  return (
    <div>
      <h1>Error With The Contact Form!</h1>
      <button onClick={handleErrorModalClose}>Close</button>
    </div>
  );
};

export default ErrorModal;
