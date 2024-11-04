import { useState } from "react";

import handleErrorModalClose from "./functions/handleErrorModalClose.js";
import handleSuccessModalClose from "./functions/handleSuccessModalClose.js";
import handleOnChange from "./functions/handleOnChange.js";
import submitForm from "./functions/submitForm.js";

import ErrorModal from "./Modals/ErrorModal";
import SubmitModal from "./Modals/SubmitModal";
import SuccessModal from "./Modals/SuccessModal";

import Input from "./Components/Input/Input.jsx";
import Textarea from "./Components/Textarea/Textarea.jsx";

import "./contactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    yourName: "",
    position: "",
    yourEmail: "",
    phone: "",
    markets: "",
    comments: "",
    _wpcf7_unit_tag: "wpcf7-f546-948",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    yourEmail: null,
    captachError: false,
    errors: [],
  });

  console.log("Errors: ", formStatus.errors);

  return (
    <div className="contact-form">
      <form
        className="contact-form-fields"
        onSubmit={(event) =>
          submitForm(event, setFormStatus, formStatus, setFormData, formData)
        }
      >
        <fieldset>
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.company}
            label="Company"
            id="company"
            type="text"
            size="full"
            placeholder="Company"
            required={false}
            errors={formStatus.errors}
          />

          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourName}
            label="Your Name"
            id="yourName"
            type="text"
            size="half"
            placeholder="Your Name"
            required={false}
            errors={formStatus.errors}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.position}
            label="Your Position"
            id="position"
            type="text"
            size="half"
            placeholder="Your Position"
            required={false}
            errors={formStatus.errors}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourEmail}
            label="Email"
            id="yourEmail"
            type="email"
            size="half"
            placeholder="Email"
            required={false}
            errors={formStatus.errors}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.phone}
            label="Phone Number"
            id="phone"
            type="text"
            size="half"
            placeholder="Phone Number"
            required={false}
            errors={formStatus.errors}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.markets}
            label="Markets we serve"
            id="markets"
            type="text"
            size="full"
            placeholder="Markets we serve"
            required={false}
            errors={formStatus.errors}
          />
          <Textarea
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.comments}
            label="Comments"
            id="comments"
            size="full"
            placeholder="Comments"
            required={false}
            rows="10"
            errors={formStatus.errors}
          />
        </fieldset>
        <div className="contact-form-fields-button">
          <button type="submit">Submit The Form</button>
        </div>
      </form>
      {formStatus.submitting && <SubmitModal />}
      {formStatus.success && (
        <SuccessModal
          handleSuccessModalClose={() =>
            handleSuccessModalClose(setFormStatus, formStatus, setFormData)
          }
        />
      )}
      {formStatus.errorWarnDisplay && (
        <ErrorModal
          handleErrorModalClose={() =>
            handleErrorModalClose(setFormStatus, formStatus)
          }
          errorMessage={formStatus.error}
        />
      )}
    </div>
  );
};

export default ContactForm;
