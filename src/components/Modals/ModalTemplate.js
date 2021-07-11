import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import actions from "../../actions";

const ModalContainer = styled.div`
  display: flex;
  padding-top: 10px;
  max-width: 60%;
  z-index: 10;
  margin: 0 auto;
`;

function ModalTemplate({
  // bodyProps = {},
  modals,
  closeModal,
  Body = () => {},
  // Expansion = () => {},
}) {
  // Props
  const { openModal } = modals;

  // Misc
  // let displayExpansion = false;

  // try {
  //   displayExpansion = Object.keys(expansion).length > 0 ? true : false;
  // } catch {
  //   // Above code fails if there is no expansionProps.
  //   // Therefore, no Expansion either. displayExpansion will remain false.
  // }

  return (
    <ModalContainer>
      <div
        // style={{
        //   width: `${displayExpansion ? "60%" : "100%"}`,
        // }}
        style={{ width: "100%" }}
      >
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
            {/* <Body {...bodyProps} /> */}
            <Body />
          </div>
        </div>
      </div>
      {/* {displayExpansion && <Expansion />} */}
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
