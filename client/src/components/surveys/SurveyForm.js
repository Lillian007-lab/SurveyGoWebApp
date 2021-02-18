// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

import "../../css/styles.css";

const SurveyForm = (props) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type="number"
          name={name}
          component={SurveyField}
        />
      );
    });
  };

  return (
    <div className="container">
      <form
        onSubmit={props.handleSubmit((values) => {
          // console.log("values:");
          // console.log(values);
          props.onSurveySubmit();
        })}
        // style={{ fontSize: "55px" }}
      >
        {renderFields()}
        <Link
          to="/surveys"
          className="btn-flat white-text AddSurveyCancelButton"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="btn-flat right white-text ButtonAddCreditsNext"
        >
          Next
          <i className="material-icons right ">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
};

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
