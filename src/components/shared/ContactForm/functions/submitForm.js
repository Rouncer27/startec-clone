import clearFormFields from "./clearFormFields";

const submitForm = async (
  event,
  setFormStatus,
  formStatus,
  setFormData,
  formData,
) => {
  event.preventDefault();

  setFormStatus((prevState) => {
    return {
      ...prevState,
      submitting: true,
      errors: [],
    };
  });

  const timeoutID = setTimeout(() => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      timeOutError: true,
      errors: [
        {
          errorMessageTimeout:
            "Form was not submitted because the server took too long to respond. Please try again.",
        },
      ],
    });
  }, 10000);

  try {
    const formDataArray = Object.entries(formData);
    const bodyFormData = new FormData();
    formDataArray.forEach((field) => {
      bodyFormData.append(field[0], field[1]);
    });

    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => response.json());

    console.log("response: ", response);
    console.log("timeoutID: ", timeoutID);

    if (response.data.status === "mail_sent") {
      clearTimeout(timeoutID);
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        captachError: false,
        validationFailedError: false,
        timeOutError: false,
        unknownError: false,
        errors: [],
      });
      clearFormFields(setFormData);
    } else if (response.data.status === "validation_failed") {
      clearTimeout(timeoutID);
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.data.invalid_fields,
        validationFailedError: true,
      });
    } else {
      clearTimeout(timeoutID);
      throw new Error(`Contact Form was not sent - ${response?.data?.status}`);
    }
  } catch (error) {
    console.log("error: ", error);
    clearTimeout(timeoutID);
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      unknownError: true,
      errors: [{ unknownErrorMessage: error }],
    });
  }
};

export default submitForm;
