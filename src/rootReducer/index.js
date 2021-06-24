import { combineReducers } from "redux";

// Reducers
import file from "./file";
import headers from "./headers";
import topNavigation from "./topNavigation";

const rootReducer = combineReducers({
    file,
    headers,
    topNavigation,
});

export default rootReducer;