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
import DropDown from "./Components/DropDown/DropDown.jsx";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    yourName: "",
    position: "",
    yourEmail: "",
    phone: "",
    inquiry: "General Inquiry",
    industry: "Commercial HVAC",
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

  console.log("inquiry: ", formData.inquiry);
  console.log("industry: ", formData.industry);

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
          <DropDown
            value={formData.inquiry}
            id={"inquiry"}
            handler={(event) => handleOnChange(event, setFormData, formData)}
            label="Please select your Inquiry:"
            size="full"
            options={[
              { label: "General Inquiry", value: "General Inquiry" },
              { label: "Sales Inquiry", value: "Sales Inquiry" },
              {
                label: "Parts & Service Inquiry",
                value: "Parts & Service Inquiry",
              },

              {
                label: "Emergency Inquiry",
                value: "Emergency Inquiry",
              },
            ]}
          />

          {formData.inquiry === "Emergency Inquiry" ? (
            <p className="emergancy-inquiry">
              Emergency Inquiry please call 1-(800) 555-9439 for emergency
              situations
            </p>
          ) : null}

          <DropDown
            value={formData.industry}
            id={"industry"}
            handler={(event) => handleOnChange(event, setFormData, formData)}
            label="Please select your Industry:"
            size="full"
            options={[
              { label: "Commercial HVAC", value: "Commercial HVAC" },
              { label: "Petrochemical", value: "Petrochemical" },
              { label: "Industrial Gas", value: "Industrial Gas" },
              {
                label: "Industrial Refrigeration",
                value: "Industrial Refrigeration",
              },
              { label: "Oil & Gas", value: "Oil & Gas" },
              {
                label: "Energy Transformation",
                value: "Energy Transformation",
              },
              { label: "Recreation Ice", value: "Recreation Ice" },
              { label: "Other", value: "other" },
            ]}
          />

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
