import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import actions from "../../actions";

const ModalContainer = styled.div`
  width: 60vw;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

function ModalTemplate({ modals, closeModal, Body = () => {} }) {
  // Props
  const { openModal } = modals;

  return (
    <ModalContainer>
      <div style={{ width: "100%" }}>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">{openModal}</div>
            <div className="title-bar-controls">
              {/* <button aria-label="Minimize"></button> */}
              {/* <button aria-label="Maximize"></button> */}
              <button aria-label="Close" onClick={() => closeModal()}></button>
            </div>
          </div>
          <div className="window-body">
            <Body />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

const { modalsActions } = actions;
const { closeModal } = modalsActions;

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps, { closeModal })(ModalTemplate);
