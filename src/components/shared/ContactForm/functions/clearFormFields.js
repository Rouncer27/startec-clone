const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      company: "",
      yourName: "",
      position: "",
      yourEmail: "",
      phone: "",
      markets: "",
      industry: "Commercial HVAC",
      comments: "",
      _wpcf7_unit_tag: "wpcf7-f546-948",
    };
  });
};

export default clearFormFields;
