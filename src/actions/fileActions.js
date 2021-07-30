import { fileTypes } from "./types";

import fileUpload from "../api/fileUpload";
import fileClose from "../api/fileClose";

function uploadFile(payload) {
  return async function (dispatch) {
    return fileUpload(payload.file).then((res) => {
      if (res !== undefined) {
        dispatch({
          payload: { ...payload, ...res, loading: false },
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

function disableApp() {
  return (dispatch) =>
    dispatch({
      type: fileTypes.DISABLED_APP,
    });
}

function enableApp() {
  return (dispatch) =>
    dispatch({
      type: fileTypes.ENABLED_APP,
    });
}

const actions = {
  closeFile,
  disableApp,
  enableApp,
  changeBlob,
  uploadFile,
};

export default actions;
