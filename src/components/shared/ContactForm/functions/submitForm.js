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

    if (response.data.status === "mail_sent") {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      });
      clearFormFields(setFormData);
    } else if (response.data.status === "validation_failed") {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.data.invalid_fields,
      });
    } else {
      throw new Error(`Contact Form was not sent - ${response?.data?.status}`);
    }
  } catch (error) {
    console.log("error: ", error);
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      errors: [{ mainErrorMessage: error }],
    });
  }
};

export default submitForm;
