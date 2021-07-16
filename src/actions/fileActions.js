import { fileTypes } from "./types";

import fileUpload from "../api/fileUpload";
import fileClose from "../api/fileClose";

function uploadFile(payload) {
  return async function (dispatch) {
    return fileUpload(payload.file).then((res) => {
      if (res !== undefined) {
        dispatch({
          payload,
          type: fileTypes.UPLOADED_FILE,
        });
      }
    });
  };
}

function closeFile() {
  return async function (dispatch) {
    return fileClose().then(() => {
      dispatch({
        payload: {},
        type: fileTypes.CLOSED_FILE,
      });
    });
  };
  // return (dispatch) =>
}

const actions = {
  uploadFile,
  closeFile,
};

export default actions;
