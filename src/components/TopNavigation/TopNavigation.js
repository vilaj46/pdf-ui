import React from "react";
import { connect } from "react-redux";

// Components
import Dropdown from "./Dropdown/Dropdown";

// Local Data
import localData from "./localData";

// Actions
import actions from "../../actions";

// Utilities
import addStateToLocalData from "./utils/addStateToLocalData";

function TopNavigation(props) {
  const { modalState, openState } = props // From the App component.
  const { file, uploadFile, closeFile } = props; // From the redux store.
  
  // See local file, just the data for our dropdown menu.
  let { fileObject, documentObject } = localData; 

  // Organized State from store.
  const fileState = {
    file, uploadFile, closeFile
  }

  fileObject = addStateToLocalData(fileState, fileObject);
  documentObject = addStateToLocalData(modalState, documentObject);

  return (
    <div style={{display: "flex"}} className="topNavigation">
      <Dropdown data={fileObject} openState={openState} />
      <Dropdown data={documentObject} openState={openState} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    file,
  }
}

const { fileActions }  = actions;

export default connect(mapStateToProps, fileActions)(TopNavigation);
