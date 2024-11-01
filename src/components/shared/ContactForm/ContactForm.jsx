import { useState } from "react";

import handleErrorModalClose from "./functions/handleErrorModalClose.js";
import handleSuccessModalClose from "./functions/handleSuccessModalClose.js";
import handleOnChange from "./functions/handleOnChange.js";
import submitForm from "./functions/submitForm.js";

import ErrorModal from "./Modals/ErrorModal";
import SubmitModal from "./Modals/SubmitModal";
import SuccessModal from "./Modals/SuccessModal";

const ContactForm = () => {
  //bump
  const [formData, setFormData] = useState({
    firstName: "",
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

  console.log("formData:", formData);
  console.log("formStatus:", formStatus);
  return (
    <div>
      <form
        onSubmit={(event) =>
          submitForm(event, setFormStatus, formStatus, formData)
        }
      >
        <div>
          <label htmlFor="yourEmail">Email</label>
          <br />
          <input
            id="yourEmail"
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={(event) => handleOnChange(event, setFormData, formData)}
            required={false}
          />
        </div>
        <div>
          <button type="submit">Submit The Form</button>
        </div>
      </form>
      {formStatus.submitting && <SubmitModal />}
      {formStatus.success && (
        <SuccessModal
          handleSuccessModalClose={() =>
            handleSuccessModalClose(setFormStatus, formStatus)
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
