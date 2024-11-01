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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    yourEmail: "",
    comments: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    yourEmail: null,
    captachError: false,
  });
  return (
    <div>
      <form
        onSubmit={(event) =>
          submitForm(event, setFormStatus, formStatus, setFormData, formData)
        }
      >
        <Input
          handler={(event) => handleOnChange(event, setFormData, formData)}
          value={formData.company}
          label="Company"
          id="company"
          type="text"
          required={false}
        />
        <Input
          handler={(event) => handleOnChange(event, setFormData, formData)}
          value={formData.yourEmail}
          label="Email"
          id="yourEmail"
          type="email"
          required={false}
        />
        <Textarea
          value={formData.comments}
          handler={(event) => handleOnChange(event, setFormData, formData)}
          errors={formStatus.errors}
          size="full"
          position="last"
          title="Comments"
          type="text"
          nameId="comments"
          required={false}
          rows="10"
        />
        <div>
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
