import React from "react";
import styled from "styled-components";

// Components
import Dropdown from "../shared/Dropdown/Dropdown";

// Local Data
import localData from "./localData";

const Container = styled.div`
  display: flex;
`;

function TopNavigation({ openState, fileState }) {
  const { documentObject } = localData;
  let { fileObject } = localData;
  fileObject = addStateToLocalData(fileState, fileObject);
  return (
    <Container className="topNavigation">
      <Dropdown data={fileObject} openState={openState} />
      <Dropdown data={documentObject} openState={openState} />
    </Container>
  );
}

function addStateToLocalData(newState, obj) {
  const { state } = obj;
  obj.state = { ...state, ...newState };
  return obj;
}

export default TopNavigation;
