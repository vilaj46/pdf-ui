import React from "react";
import "xp.css/dist/XP.css";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"; 
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

// Components
import App from "./components/App";

// Reducers
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
