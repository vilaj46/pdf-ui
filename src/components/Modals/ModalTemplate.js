import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  padding-top: 10px;
  display: flex;
  max-width: 70%;
`;

function ModalTemplate({
  bodyProps = {},
  modalState = {},
  Body = () => {},
  expansionProps = {},
  Expansion = () => {},
}) {
  // Props
  const { openModal, setOpenModal } = modalState;

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
              <button
                aria-label="Close"
                onClick={() => setOpenModal("")}
              ></button>
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

export default ModalTemplate;
