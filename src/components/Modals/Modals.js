import React from "react";
import { connect } from "react-redux";

// Components
import ModalTemplate from "./ModalTemplate";

// Sub Modals
import NewHeaders from "./NewHeaders/NewHeaders";
import PageNumbers from "./PageNumbers/PageNumbers";

function Modals(props) {
  // Redux Store Properties
  const { modals } = props;
  const { openModal } = modals;

  // Misc
  const displayModal = openModal.length > 0 ? true : false;

  if (openModal === "Headers") {
    return displayModal && <ModalTemplate Body={NewHeaders} />;
  } else {
    return displayModal && <ModalTemplate Body={PageNumbers} />;
  }
}

const mapStateToProps = (state) => {
  const { headers, modals } = state;
  return {
    headers,
    modals,
  };
};

export default connect(mapStateToProps)(Modals);
