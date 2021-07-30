import React from "react";
import { connect } from "react-redux";

// Components
import Dropdown from "./Dropdown/Dropdown";

// Local Data
import localData from "./localData";

// Actions
import actions from "../../actions";

// Utils
import addStateToLocalData from "./utils/addStateToLocalData";

function TopNavigation(props) {
  // Redux Actions
  const { uploadFile, closeFile, expandModal } = props;

  // Redux Store Properties
  const { file } = props;

  // Organized State for Sub Component
  const fileState = {
    file,
    uploadFile,
    closeFile,
  };

  const modalState = {
    expandModal,
  };

  // Misc
  // Local Data
  let { fileObject, documentObject } = localData;

  fileObject = addStateToLocalData(fileState, fileObject);
  documentObject = addStateToLocalData(modalState, documentObject);

  return (
    <div style={{ display: "flex" }} className="topNavigation">
      <Dropdown data={fileObject} />
      <Dropdown data={documentObject} />
    </div>
  );
}

const { fileActions, modalsActions } = actions;

const mapStateToProps = (state) => {
  const { file, modals } = state;
  return {
    file,
    modals,
  };
};

export default connect(mapStateToProps, { ...fileActions, ...modalsActions })(
  TopNavigation
);
