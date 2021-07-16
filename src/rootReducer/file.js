import { fileTypes } from "../actions/types";

const initialState = {};

function fileReducer(state = initialState, action) {
  switch (action.type) {
    case fileTypes.UPLOADED_FILE:
      return action.payload;
    case fileTypes.CLOSED_FILE:
      return action.payload;
    case fileTypes.CHANGED_BLOB:
      return {
        ...state,
        blob: action.payload,
      };
    default:
      return state;
  }
}

export default fileReducer;
