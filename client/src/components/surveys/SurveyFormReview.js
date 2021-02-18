// SurveyFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div className="container">
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="white-text darken-3 btn-flat AddSurveyCancelButton"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => {
          submitSurvey(formValues, history);
        }}
        className="btn-flat right white-text ButtonAddCreditsNext"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("formvalue: ");
  // console.log(state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSurvey: (formValues, history) =>
      dispatch(actions.submitSurvey(formValues, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SurveyFormReview));
