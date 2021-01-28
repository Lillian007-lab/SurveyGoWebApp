import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
// react-redux library is all about compatibility between react and redux libraries
import * as actions from "../actions";
// import all different action creators from our actions/index.js

// on the fron end, we are making use of Web pack
// which gives us easy access to ES 2015 modules.
// that's why we use "import" here
// However. on the back end, we are using node JS,
// which support common JS modules.
// that's why we use "require" there

import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = (props) => {
  console.log("log from App");
  console.log(props);

  useEffect(() => {
    console.log("useEffect");
    props.fetchUser2();
  }, [props]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser2: () => dispatch(actions.fetchUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);
