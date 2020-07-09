import {
  FETCH_WEBSITE,
  FETCH_WEBSITES,
  EDIT_WEBSITE,
  CREATE_WEBSITE,
  DELETE_WEBSITE,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEBSITES:
      return { ...state, ..._.mapKeys(action.payload, "name") };
    case FETCH_WEBSITE:
      return { ...state, [action.payload.name]: action.payload };
    case CREATE_WEBSITE:
      return { ...state, [action.payload.name]: action.payload };
    case EDIT_WEBSITE:
      return { ...state, [action.payload.name]: action.payload };
    case DELETE_WEBSITE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
