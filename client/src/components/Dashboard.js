import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

import "../css/styles.css";

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="fixed-action-btn ">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large waves-effect waves-red AddSurveyButton"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
