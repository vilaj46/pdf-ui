import React from "react";

// Components
import PDF from "./PDF/PDF";
import Modals from "./Modals/Modals";
import TopNavigation from "./TopNavigation/TopNavigation";

// Utilities
import utilities from "./utilities";

function App() {
  // State
  const [openDropdown, setOpenDropdown] = React.useState("");
  const [openModal, setOpenModal] = React.useState("");

  // Organized State for sub components.
  const openState = {
    openDropdown,
    setOpenDropdown,
  };
  const modalState = {
    openModal,
    setOpenModal,
  };

  return (
    <main
    style={{ height: "98vh", width: "auto" }}
      onClick={(e) => utilities.closeTopNavigation(e, openDropdown, setOpenDropdown)}
    >
      <TopNavigation
        openState={openState}
        modalState={modalState}
      />
      <Modals modalState={modalState} />
      <PDF openState={openState} />
    </main>
  );
}

export default App;
