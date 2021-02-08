import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_SURVEYS } from "./types";

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

export const fetchSurveysSuccess = (surveys) => {
  return {
    type: FETCH_SURVEYS,
    payload: surveys,
  };
};

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  // console.log("fetching user");
  // console.log(res.data);
  const user = res.data;
  dispatch(fetchUserSuccess(user));
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  const user = res.data;
  dispatch(fetchUserSuccess(user));
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  const user = res.data;
  history.push("/surveys");
  dispatch(fetchUserSuccess(user));
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("./api/surveys");
  dispatch(fetchSurveysSuccess(res.data));
};
