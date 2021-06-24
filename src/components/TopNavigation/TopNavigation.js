import React from "react";
import styled from "styled-components";

// Components
import Dropdown from "../shared/Dropdown/Dropdown";

// Local Data
import localData from "./localData";

const Container = styled.div`
  display: flex;
`;

function TopNavigation({ openState, fileState, modalState }) {
  let { fileObject, documentObject } = localData;
  fileObject = addStateToLocalData(fileState, fileObject);
  documentObject = addStateToLocalData(modalState, documentObject);
  return (
    <Container className="topNavigation">
      <Dropdown data={fileObject} openState={openState} />
      <Dropdown data={documentObject} openState={openState} />
    </Container>
  );
}

/**
 * @param {Object} newState - Current state value and its setter.
 * @param {Object} obj - Data object
 * @returns original object with state from our App.
 *
 * Helper function just takes the current state and
 * the setter and combines it with our data object.
 */
function addStateToLocalData(newState, obj) {
  const { state } = obj;
  obj.state = { ...state, ...newState };
  return obj;
}

export default TopNavigation;
