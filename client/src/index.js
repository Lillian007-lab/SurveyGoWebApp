import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import allReducers from "./reducers";

const initialState = {};

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
// const store = createStore(c, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY is ", process.env.STRIPE_PUBLISHABLE_KEY);
console.log("Environment is ", process.env.NODE_ENV);
