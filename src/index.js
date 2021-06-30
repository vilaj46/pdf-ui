import React from "react";
import "xp.css/dist/XP.css";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Components
import App from "./components/App";

// Reducers
import rootReducer from "./rootReducer";

// Clean up QuickSpacing file.
// Remove a line inbetween
// Features to be added: Reset header.
// After deleting one line whose header is only one line.
// We cannot add text to it.

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
