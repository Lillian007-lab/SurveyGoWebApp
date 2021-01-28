import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  console.log("fetching user");
  console.log(res.data);
  const user = res.data;
  dispatch(fetchUserSuccess(user));
};
