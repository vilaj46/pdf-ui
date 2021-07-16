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
}

function changeBlob(blob) {
  return (dispatch) =>
    dispatch({
      payload: blob,
      type: fileTypes.CHANGED_BLOB,
    });
}

const actions = {
  uploadFile,
  closeFile,
  changeBlob,
};

export default actions;
