import React from "react";
import styled from "styled-components";

// Components
import PDF from "./PDF/PDF";
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
  const [openDropdown, setOpenDropdown] = React.useState("");
  const [file, setFile] = React.useState({});

  // Organized State for sub components.
  const openState = {
    openDropdown,
    setOpenDropdown,
  };
  const fileState = {
    file,
    setFile,
  };

  return (
    <Container
      onClick={(e) => closeTopNavigation(e, openDropdown, setOpenDropdown)}
    >
      <TopNavigation openState={openState} fileState={fileState} />
      <PDF openState={openState} fileState={fileState} />
    </Container>
  );
}

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
