import { combineReducers } from "redux";

// Reducers
import file from "./file";
import headers from "./headers";
import topNavigation from "./topNavigation";
import modals from "./modals";

/**
 * Hook up headers + actions to the store.
 * Go over the read me again for:
 * > Component Strucute
 * > File Stucture
 *
 * Make sure file names are correct.
 * Try and clean  up files. Probably not possible with redux.
 */

const rootReducer = combineReducers({
  file,
  modals,
  headers,
  topNavigation,
});

export default rootReducer;
