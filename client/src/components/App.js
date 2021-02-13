import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import all different action creators from our actions/index.js

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Footer from "./Footer";

const App = (props) => {
  // console.log("log from App");
  // console.log(props);

  useEffect(() => {
    console.log("useEffect");
    props.fetchUser2();
  }, [props]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser2: () => dispatch(actions.fetchUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);
