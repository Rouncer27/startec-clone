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
    industry: "",
    comments: "",
    _wpcf7_unit_tag: "wpcf7-f546-948",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    captachError: false,
    validationFailedError: false,
    timeOutError: false,
    unknownError: false,
    errors: [],
  });

  console.log("formData: ", formData.industry);

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
            required={true}
            error={formStatus.errors.find((error) => error.idref === "company")}
          />

          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourName}
            label="Your Name"
            id="yourName"
            type="text"
            size="half"
            placeholder="Your Name"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "yourName",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.position}
            label="Your Position"
            id="position"
            type="text"
            size="half"
            placeholder="Your Position"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "position",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourEmail}
            label="Email"
            id="yourEmail"
            type="email"
            size="half"
            placeholder="Email"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "yourEmail",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.phone}
            label="Phone Number"
            id="phone"
            type="text"
            size="half"
            placeholder="Phone Number"
            required={true}
            error={formStatus.errors.find((error) => error.idref === "phone")}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.markets}
            label="Markets we serve"
            id="markets"
            type="text"
            size="full"
            placeholder="Markets we serve"
            required={true}
            error={formStatus.errors.find((error) => error.idref === "markets")}
          />

          <div>
            <label htmlFor="industry">
              Please select your Industry:
              <select
                value={formData.industry}
                name="industry"
                id="industry"
                onChange={(event) =>
                  handleOnChange(event, setFormData, formData)
                }
              >
                <option value="commercial-hvac">Commercial HVAC</option>
                <option value="petrochemical">Petrochemical</option>
                <option value="industrial-gas">Industrial Gas</option>
                <option value="industrial-refrigeration">
                  Industrial Refrigeration
                </option>
                <option value="oil-&-gas">Oil & Gas</option>
                <option value="energy-transformation">
                  Energy Transformation
                </option>
                <option value="recreation-ice">Recreation Ice</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <Textarea
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.comments}
            label="Comments"
            id="comments"
            size="full"
            placeholder="Comments"
            required={true}
            rows="10"
            error={formStatus.errors.find(
              (error) => error.idref === "comments",
            )}
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
          errorMessages={formStatus.errors}
          validationFailedError={formStatus.validationFailedError}
          timeOutError={formStatus.timeOutError}
          unknownError={formStatus.unknownError}
        />
      )}
    </div>
  );
};

export default ContactForm;
