import { modalTypes } from "../actions/types";

const initialState = {
  openModal: "",
};

function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case modalTypes.EXPANDED_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case modalTypes.CLOSED_MODAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default modalsReducer;
