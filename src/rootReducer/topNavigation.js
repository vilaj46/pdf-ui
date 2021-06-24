import { topNavigationTypes } from "../actions/types";

const initialState = {
    openDropdown: "",
};

function topNavigationReducer(state = initialState, action) {
    switch (action.type) {
        case topNavigationTypes.EXPANDED_DROPDOWN:
            return {
                ...state,
                openDropdown: action.payload
            };
        case topNavigationTypes.CLOSED_DROPDOWN:
            return initialState;
        default:
            return state;
    }
}

export default topNavigationReducer;