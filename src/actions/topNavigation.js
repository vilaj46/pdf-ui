import { topNavigationTypes } from "./types";

function expandDropdown(payload) {
  return (dispatch) =>
    dispatch({
      payload,
      type: topNavigationTypes.EXPANDED_DROPDOWN,
    });
}

function closeDropdown() {
  return (dispatch) =>
    dispatch({
      type: topNavigationTypes.CLOSED_DROPDOWN,
    });
}

const actions = {
  expandDropdown,
  closeDropdown,
};

export default actions;
