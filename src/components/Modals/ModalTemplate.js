import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import actions from "../../actions";

const ModalContainer = styled.div`
  padding-top: 10px;
  display: flex;
  max-width: 70%;
`;

function ModalTemplate({
  bodyProps = {},
  // modalState = {},
  modals,
  expandModal,
  closeModal,
  Body = () => {},
  expansionProps = {},
  Expansion = () => {},
}) {
  // Props
  // const { openModal, setOpenModal } = modalState;
  const { openModal } = modals;

  // Misc
  let displayExpansion = false;

  try {
    const { expansion } = expansionProps;
    displayExpansion = Object.keys(expansion).length > 0 ? true : false;
  } catch {
    // Above code fails if there is no expansionProps.
    // Therefore, no Expansion either. displayExpansion will remain false.
  }

  return (
    <ModalContainer>
      <div style={{ width: `${displayExpansion ? "60%" : "100%"}` }}>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">{openModal}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => closeModal()}></button>
            </div>
          </div>
          <div className="window-body">
            <Body {...bodyProps} />
          </div>
        </div>
      </div>
      {displayExpansion && <Expansion {...expansionProps} />}
    </ModalContainer>
  );
}

const { modalsActions } = actions;
const { expandModal, closeModal } = modalsActions;

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps, { expandModal, closeModal })(
  ModalTemplate
);
