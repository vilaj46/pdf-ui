import React from "react";
import { connect } from "react-redux";

// Components
import ModalTemplate from "./ModalTemplate";
import Expansion from "./Expansion/Expansion";

// Sub Modals
import Headers from "./Headers/Headers";
// PageNumbers goes here.

function Modals(props) {
  // Props
  const { modalState } = props; // From the App component.
  // const { headers } = props // From the redux store.

  // State
  const [expansion, setExpansion] = React.useState({});

  // Misc
  const { openModal } = modalState;
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

const mapStateToProps = (state) => {
  const { headers } = state;
  return {
    headers,
  }
}

export default connect(mapStateToProps)(Modals);
