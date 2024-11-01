const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      yourEmail: "",
      comments: "",
      _wpcf7_unit_tag: "wpcf7-f546-948",
    };
  });
};

export default clearFormFields;
