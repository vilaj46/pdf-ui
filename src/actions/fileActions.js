import {fileTypes} from "./types";

function uploadFile(payload) {
    return dispatch => dispatch({
        payload,
        type: fileTypes.UPLOADED_FILE,
    })
}

function closeFile() {
    return dispatch => dispatch({
        payload: {}, 
        type: fileTypes.CLOSED_FILE
    })
}

const actions = {
    uploadFile,
    closeFile,
}

export default actions;