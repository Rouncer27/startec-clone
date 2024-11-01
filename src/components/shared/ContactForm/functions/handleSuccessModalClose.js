import clearFormFields from "./clearFormFields";

const handleSuccessModalClose = (setFormStatus, formStatus, setFormData) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: null,
    captachError: false,
  });

  clearFormFields(setFormData);
};

export default handleSuccessModalClose;
