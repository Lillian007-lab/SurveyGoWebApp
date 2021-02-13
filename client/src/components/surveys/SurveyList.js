import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

import "../../css/styles.css";

const SurveyList = (props) => {
  useEffect(() => {
    props.fetchSurveys();
  }, [props]);

  const renderSurveys = () => {
    return props.surveys.reverse().map((survey) => {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
