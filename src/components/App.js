import React from "react";
import { connect } from "react-redux";

// Components
import PDF from "./PDF/PDF";
import Modals from "./Modals/Modals";
import TopNavigation from "./TopNavigation/TopNavigation";

// Utilities
import utils from "./utils";

// Actions
import actions from "../actions";

function App(props) {
  // Redux Store Properties.
  const { closeDropdown, topNavigation } = props;
  const { openDropdown } = topNavigation;

  return (
    <main
      style={{ height: "98vh", width: "auto" }}
      onClick={(e) => utils.closeTopNavigation(e, openDropdown, closeDropdown)}
    >
      <TopNavigation />
      <Modals />
      <PDF />
    </main>
  );
}

const { topNavigation } = actions;
const { closeDropdown } = topNavigation;

const mapStateToProps = (state) => {
  const { topNavigation } = state;
  return {
    topNavigation,
  };
};

export default connect(mapStateToProps, { closeDropdown })(App);
