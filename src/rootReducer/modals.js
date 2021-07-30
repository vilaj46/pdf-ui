import { modalTypes } from "../actions/types";

const initialState = {
  openModal: "",
  // expansion: "",
  // expansionData: {},
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
    case modalTypes.EXPANDED_MODAL_EXPANSION:
      return {
        ...state,
        expansion: action.payload.expansion,
        expansionData: action.payload.expansionData,
      };
    case modalTypes.CLOSED_MODAL_EXPANSION:
      return {
        ...state,
        expansion: "",
        expansionData: {},
      };
    default:
      return state;
  }
}

export default modalsReducer;
