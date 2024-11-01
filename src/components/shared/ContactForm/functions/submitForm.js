const submitForm = async (event, setFormStatus, formStatus, formData) => {
  event.preventDefault();
  console.log("Submit the form!");
  console.log("formData:", formData);
  console.log("setFormStatus:", setFormStatus);
  console.log("formStatus:", formStatus);
};

export default submitForm;
