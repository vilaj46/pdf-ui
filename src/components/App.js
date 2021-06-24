import React from "react";
import styled from "styled-components";

// Components
import PDF from "./PDF/PDF";
import Modals from "./Modals/Modals";
import TopNavigation from "./TopNavigation/TopNavigation";

// Dropdown Utility
import dropdownUtility from "./shared/Dropdown/utils";

// Local Data
import { TIME_TO_CLOSE_DROPDOWN } from "./localData";

const Container = styled.div`
  height: 98vh;
  width: auto;
`;

function App() {
  // State
  const [file, setFile] = React.useState({});
  const [openDropdown, setOpenDropdown] = React.useState("");
  const [openModal, setOpenModal] = React.useState("");

  // Organized State for sub components.
  const openState = {
    openDropdown,
    setOpenDropdown,
  };
  const fileState = {
    file,
    setFile,
  };
  const modalState = {
    openModal,
    setOpenModal,
  };

  return (
    <Container
      onClick={(e) => closeTopNavigation(e, openDropdown, setOpenDropdown)}
    >
      <TopNavigation
        openState={openState}
        fileState={fileState}
        modalState={modalState}
      />
      <Modals modalState={modalState} />
      <PDF openState={openState} fileState={fileState} />
    </Container>
  );
}

/**
 * @param {Object} e - event object.
 * @param {String} openDropdown - Label of the dropdown open.
 * @param {Function} setOpenDropdown - Sets our openDropdown.
 *
 * Check if we click a label on the Dropdown menus.
 * Only works in the TopNavigation panel.
 *
 * If we have one open and click on the app, it closes the menus.
 */
function closeTopNavigation(e, openDropdown, setOpenDropdown) {
  const classInSearch = "topNavigationDetails";
  const target =
    e.target.tagName === "SUMMARY" ? e.target.parentNode : e.target;
  const classList = Array.from(target.classList);
  if (!classList.includes(classInSearch) && openDropdown !== "") {
    setOpenDropdown("");
    const details = Array.from(document.querySelectorAll(`.${classInSearch}`));
    dropdownUtility.closeAllDropdowns(details, TIME_TO_CLOSE_DROPDOWN);
  }
}

export default App;
