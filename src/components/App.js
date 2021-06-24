import React from "react";
import { connect } from "react-redux";

// Components
import PDF from "./PDF/PDF";
import Modals from "./Modals/Modals";
import TopNavigation from "./TopNavigation/TopNavigation";

// Utilities
import utilities from "./utilities";

// Actions
import actions from "../actions";

function App(props) {
  // Props
  const { closeDropdown, topNavigation } = props; // From redux store.
  const { openDropdown } = topNavigation;

  // State
  // Not put into the store yet as we have no reason
  // to. They only go two levels down.
  const [openModal, setOpenModal] = React.useState("");

  const modalState = {
    openModal,
    setOpenModal,
  };

  return (
    <main
      style={{ height: "98vh", width: "auto" }}
      onClick={(e) =>
        utilities.closeTopNavigation(e, openDropdown, closeDropdown)
      }
    >
      <TopNavigation modalState={modalState} />
      <Modals modalState={modalState} />
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
