import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

import "../../css/styles.css";

const SurveyList = (props) => {
  // console.log();
  useEffect(() => {
    props.fetchSurveys();
  }, []);

  const renderSurveys = () => {
    // console.log("render surveys");

    return props.surveys.map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>no: {survey.no}</a>
            <a>total: {survey.totalSent}</a>
            <button
              className="right btn-small ButtonDelete"
              onClick={() => {
                props.deleteSurvey(survey);
              }}
            >
              Delete this Survey
            </button>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveys: () => dispatch(fetchSurveys()),
    deleteSurvey: (survey) => dispatch(deleteSurvey(survey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
