import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 260px;
  left: 10px;
  color: #ffffff;

  @media screen and (max-width: 855px) {
    left: 0px;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckAndX = styled.div`
  display: flex;
`;

function NegativeButtons(props) {
  // Properties
  const {
    removing,
    removeSpace,
    toggleRemoving,
    removeBlankHeaders,
    removeMarkedForDeletion,
  } = props;

  return (
    <Container>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Negative Controls</div>
        </div>
        <FlexColumn className="window-body">
          <RemoveButtons
            removing={removing}
            toggleRemoving={toggleRemoving}
            removeMarkedForDeletion={removeMarkedForDeletion}
          />
          <button type="text" onClick={removeSpace}>
            Remove Space
          </button>
          <button type="text" onClick={removeBlankHeaders}>
            Remove Blank Headers
          </button>
        </FlexColumn>
      </div>
    </Container>
  );
}

function RemoveButtons(props) {
  // Properties.
  const { toggleRemoving, removing, removeMarkedForDeletion } = props;

  if (!removing) {
    return (
      <button type="text" onClick={toggleRemoving}>
        Remove Headers
      </button>
    );
  } else {
    return (
      <CheckAndX>
        <button type="text" onClick={removeMarkedForDeletion}>
          &#x2713;
        </button>
        <button type="text" title="Close Removing" onClick={toggleRemoving}>
          X
        </button>
      </CheckAndX>
    );
  }
}

export default NegativeButtons;
