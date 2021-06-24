import { combineReducers } from "redux";

// Reducers
import file from "./file";
import headers from "./headers";

const rootReducer = combineReducers({
    headers,
    file
});

export default rootReducer;