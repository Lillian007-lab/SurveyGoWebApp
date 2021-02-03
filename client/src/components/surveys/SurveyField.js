// SurveyField contains logic to render a single
// label and text input
import React from "react";

const SurveyField = (props) => {
  const input = props.input;
  const label = props.label;

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
