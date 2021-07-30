import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import PDF from "./PDF/PDF";
import Modals from "./Modals/Modals";
import Loading from "./Loading/Loading";
import TopNavigation from "./TopNavigation/TopNavigation";

// Utilities
import utils from "./utils";

// Actions
import actions from "../actions";

const Main = styled.main`
  height: 100vh;
  width: auto;
  position: relative;
`;

function App(props) {
  // Redux Actions
  const { closeDropdown } = props;

  // Redux Store Properties.
  const { topNavigation, file } = props;
  const { openDropdown } = topNavigation;

  // Misc
  // Disables app when we are loading an api call.
  const pointerEvents = file.loading === true ? "none" : "auto";
  // There was terrible opacity when we were loading an api call.
  // This ensures we only see the opac'd background.
  const overflow = file.loading === true ? "hidden" : "visible";

  return (
    <Main
      style={{
        pointerEvents,
        overflow,
      }}
      onClick={(e) => utils.closeTopNavigation(e, openDropdown, closeDropdown)}
    >
      <TopNavigation />
      <Modals />
      <PDF />
      <Loading pointerEvents={pointerEvents} />
    </Main>
  );
}

const { topNavigation } = actions;
const { closeDropdown } = topNavigation;

const mapStateToProps = (state) => {
  const { topNavigation, file } = state;
  return {
    topNavigation,
    file,
  };
};

export default connect(mapStateToProps, { closeDropdown })(App);
