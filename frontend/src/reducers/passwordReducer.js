import {
  FETCH_PASSWORD,
  FETCH_PASSWORDS,
  EDIT_PASSWORD,
  CREATE_PASSWORD,
  DELETE_PASSWORD,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PASSWORDS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PASSWORD:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PASSWORD:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PASSWORD:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PASSWORD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
