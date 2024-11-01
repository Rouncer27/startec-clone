const SuccessModal = ({ handleSuccessModalClose }) => {
  return (
    <div>
      <h1>Success you form has been sent!</h1>
      <button onClick={handleSuccessModalClose}>Close</button>
    </div>
  );
};

export default SuccessModal;
