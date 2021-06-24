import React from "react";

// Components
import ModalTemplate from "./ModalTemplate";
import Expansion from "./Expansion/Expansion";

// Sub Modals
import Headers from "./Headers/Headers";
// PageNumbers goes here.

function Modals({ modalState }) {
  // Props
  const { openModal } = modalState;

  // State
  const [expansion, setExpansion] = React.useState({});

  // Misc
  const displayModal = openModal.length > 0 ? true : false;

  // Organized State
  const expansionObj = {
    expansion,
    setExpansion,
  };

  const headerBodyObj = {
    modalState,
    expansionObj,
    
  };

  return (
    displayModal && (
      /** Header Modal w/ Expansion*/
      <ModalTemplate
        modalState={modalState}
        Body={Headers}
        bodyProps={headerBodyObj}
        expansionProps={{ ...expansionObj, ...modalState }}
        Expansion={Expansion}
      />
    )
  );
}

// Include helper function to setup templates based on the modal opened.

export default Modals;
