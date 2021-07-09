import React from "react";
import { connect } from "react-redux";

// Components
import ModalTemplate from "./ModalTemplate";

// Sub Modals
// import Headers from "./Headers/Headers";
import NewHeaders from "./NewHeaders/NewHeaders";
// PageNumbers goes here.

function Modals(props) {
  // Props
  const { modals } = props; // From the redux store.

  // Misc
  const { openModal } = modals;
  const displayModal = openModal.length > 0 ? true : false;

  return (
    displayModal && (
      /** Header Modal w/ Expansion*/
      // <ModalTemplate Body={Headers} />
      <ModalTemplate Body={NewHeaders} />
    )
  );
}

// Include helper function to setup templates based on the modal opened.

const mapStateToProps = (state) => {
  const { headers, modals } = state;
  return {
    headers,
    modals,
  };
};

export default connect(mapStateToProps)(Modals);
