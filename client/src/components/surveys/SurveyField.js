// SurveyField contains logic to render a single
// label and text input
import React from "react";

// const SurveyField = ({props}) => {
//   const input = props.input;
//   const label = props.label;
//   const error = props.meta.error;
//   const touched = props.meta.touched;

// Destructured
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
