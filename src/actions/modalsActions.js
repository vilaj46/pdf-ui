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

// function expandModalExpansion(payload) {
//   return (dispatch) =>
//     dispatch({
//       payload, // {expansion: "", expansionData: {}}
//       type: modalTypes.EXPANDED_MODAL_EXPANSION,
//     });
// }

// function closeModalExpansion() {
//   return (dispatch) =>
//     dispatch({
//       type: modalTypes.CLOSED_MODAL_EXPANSION,
//     });
// }

const actions = {
  expandModal,
  closeModal,
  // closeModalExpansion,
  // expandModalExpansion,
};

export default actions;
