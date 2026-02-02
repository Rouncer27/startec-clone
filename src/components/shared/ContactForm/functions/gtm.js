// utils/gtm.js
export const fireFormSubmitEvent = (formData) => {
  if (!window.dataLayer) return;
  console.log("Contact Form GTM Fired", formData);

  window.dataLayer.push({
    event: "form_submit",
    form_name: "contact_form",
    inquiry_type: formData.inquiry,
    industry: formData.industry,
    page_location: window.location.href,
  });
};
