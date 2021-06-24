import { modalTypes } from "./types";

function expandModal(payload) {
  return (dispatch) =>
    dispatch({
      payload,
      type: modalTypes.EXPANDED_MODAL,
    });
}

function closeModal() {
  return (dispatch) =>
    dispatch({
      type: modalTypes.CLOSED_MODAL,
    });
}

const actions = {
  expandModal,
  closeModal,
};

export default actions;
