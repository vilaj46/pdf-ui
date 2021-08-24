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
    case fileTypes.ENABLED_APP:
      return {
        ...state,
        loading: false,
      };
    case fileTypes.DISABLED_APP:
      return {
        ...state,
        loading: true,
      };
    case fileTypes.CHANGED_FILE_PATH:
      return {
        ...state,
        filePath: action.payload,
      };
    case fileTypes.CHANGED_METADATA:
      return {
        ...state,
        metadata: action.payload,
      };
    default:
      return state;
  }
}

export default fileReducer;
