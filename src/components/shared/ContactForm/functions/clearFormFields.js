const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      yourEmail: "",
      comments: "",
    };
  });
};

export default clearFormFields;
