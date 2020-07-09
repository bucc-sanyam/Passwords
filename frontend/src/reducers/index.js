import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import passwordReducer from "./passwordReducer";
import websiteReducer from "./websiteReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  password: passwordReducer,
  website: websiteReducer,
});
