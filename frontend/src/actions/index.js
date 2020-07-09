import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PASSWORD,
  FETCH_PASSWORDS,
  FETCH_PASSWORD,
  EDIT_PASSWORD,
  DELETE_PASSWORD,
  CREATE_WEBSITE,
  FETCH_WEBSITES,
  DELETE_WEBSITE,
  EDIT_WEBSITE,
} from "./types";
import history from "../history";
import { axiosInstance } from "../network";

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const createPassword = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axiosInstance.post("/passwords", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_PASSWORD, payload: response.data });
  history.push("/");
};

export const fetchPasswords = () => async (dispatch) => {
  const response = await axiosInstance.get("/passwords");
  dispatch({ type: FETCH_PASSWORDS, payload: response.data });
};

export const fetchPassword = (id) => async (dispatch) => {
  const response = await axiosInstance.get(`/passwords/${id}`);
  dispatch({ type: FETCH_PASSWORD, payload: response.data });
};

export const deletePassword = (id) => async (dispatch) => {
  await axiosInstance.delete(`/passwords/${id}`);
  dispatch({ type: DELETE_PASSWORD, payload: id });
  history.push("/");
};

export const editPassword = (id, formValues) => async (dispatch) => {
  const response = await axiosInstance.patch(`/passwords/${id}`, formValues);
  dispatch({ type: EDIT_PASSWORD, payload: response.data });
  history.push("/");
};

export const createWebsite = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axiosInstance.post("/websites/new/", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_WEBSITE, payload: response.data });
  // history.push("/");
};

export const fetchWebsite = (name) => async (dispatch) => {
  const response = await axiosInstance.get(`/websites/${name}`);
  dispatch({ type: FETCH_PASSWORD, payload: response.data });
};

export const fetchWebsites = () => async (dispatch) => {
  const response = await axiosInstance.get("/websites");
  dispatch({ type: FETCH_WEBSITES, payload: response.data });
};

export const deleteWebsite = (name) => async (dispatch) => {
  await axiosInstance.delete(`/websites/${name}`);
  dispatch({ type: DELETE_WEBSITE, payload: name });
  history.push("/");
};

export const editWebsite = (name, formValues) => async (dispatch) => {
  const response = await axiosInstance.patch(`/websites/${name}`, formValues);
  dispatch({ type: EDIT_WEBSITE, payload: response.data });
  history.push("/");
};

// export const createUser = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await axiosInstance.post("/user", {
//     ...formValues,
//     userId,
//   });
//   dispatch({ type: CREATE_PASSWORD, payload: response.data });
//   history.push("/");
// };
