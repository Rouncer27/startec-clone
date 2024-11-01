import clearFormFields from "./clearFormFields";

const handleSuccessModalClose = (setFormStatus, formStatus) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: null,
    captachError: false,
  });

  clearFormFields();
};

export default handleSuccessModalClose;
