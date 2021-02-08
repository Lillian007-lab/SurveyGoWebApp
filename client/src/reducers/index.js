import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

const allReducers = combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});

export default allReducers;
