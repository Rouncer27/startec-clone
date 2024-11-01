import { useState } from "react";
import "./ourValues.scss";

const OurValues = ({ data }) => {
  const [activeValue, setActiveValue] = useState(0);
  return (
    <div className="our-values">
      <div className="our-values-wrapper">
        <div className="our-values-title">
          <h2>Our Values</h2>
        </div>
        <div className="our-values-main">
          <div className="our-values-titles">
            {data.values.map((value, index) => (
              <button
                className={`${activeValue === index ? "active-value-button" : ""}`}
                type="button"
                key={index}
                disabled={activeValue === index}
                onClick={() => setActiveValue(index)}
              >
                {value.title}
              </button>
            ))}
          </div>
          <div className="our-values-content">
            {data.values.map((value, index) => (
              <div
                key={index}
                className={`our-values-content-container${activeValue === index ? " active-value" : ""}`}
                dangerouslySetInnerHTML={{ __html: value.content }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
