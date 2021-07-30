import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import actions from "../../actions";

const ModalContainer = styled.div`
  left: 0;
  right: 0;
  width: 60vw;
  z-index: 10;
  margin: 0 auto;
  position: absolute;
`;

const HundoPercent = styled.div`
  width: 100%;
`;

function ModalTemplate(props) {
  // Redux Actions
  const { closeModal } = props;

  // Redux Store Properties
  const { modals } = props;
  const { openModal } = modals;

  // Local Properties
  const { Body } = props;

  return (
    <ModalContainer>
      <HundoPercent>
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
      </HundoPercent>
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
