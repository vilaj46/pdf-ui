import React from "react";
import styled from "styled-components";

// Sub Components
import Headers from "./Headers/Headers";
import Expansion from "./Expansion/Expansion";

const ModalContainer = styled.div`
  padding-top: 10px;
  display: flex;
  max-width: 70%;
`;

const div = styled.div`
  width: 100%;
`;

function Modals({ modalState }) {
  // Props
  const { openModal, setOpenModal } = modalState;

  // State
  const [expansion, setExpansion] = React.useState({});

  // Misc
  const displayModal = openModal.length > 0 ? true : false;
  const displayExpansion = Object.keys(expansion).length > 0 ? true : false;

  // Organized State
  const expansionObj = {
    expansion,
    setExpansion,
  };

  return (
    displayModal && (
      <ModalContainer>
        <div style={{ width: `${displayExpansion ? "60%" : "100%"}` }}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">{openModal}</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button
                  aria-label="Close"
                  onClick={() => setOpenModal("")}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <Headers modalState={modalState} expansionObj={expansionObj} />
            </div>
          </div>
        </div>
        {displayExpansion && <Expansion expansionObj={expansionObj} />}
      </ModalContainer>
    )
  );
}

export default Modals;
