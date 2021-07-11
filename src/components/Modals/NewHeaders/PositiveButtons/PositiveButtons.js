import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 100px;
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

function PositiveButtons(props) {
  // Properties
  const {
    addHeader,
    inserting,
    spaceHeaders,
    applyHeaders,
    toggleInserting,
    insertHeadersIntoPositions,
  } = props;

  return (
    <Container>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Positive Controls</div>
        </div>
        <FlexColumn className="window-body">
          <button type="text" onClick={addHeader}>
            Add Header
          </button>
          <InsertButtons
            inserting={inserting}
            toggleInserting={toggleInserting}
            insertHeadersIntoPositions={insertHeadersIntoPositions}
          />
          <button type="text" onClick={spaceHeaders}>
            Space Headers
          </button>
          <hr />
          <button type="text" onClick={applyHeaders}>
            Apply Headers
          </button>
        </FlexColumn>
      </div>
    </Container>
  );
}

function InsertButtons(props) {
  // Properties.
  const { toggleInserting, inserting, insertHeadersIntoPositions } = props;
  if (!inserting) {
    return (
      <button type="text" onClick={toggleInserting}>
        Insert Headers
      </button>
    );
  } else {
    return (
      <CheckAndX>
        <button type="text" onClick={insertHeadersIntoPositions}>
          &#x2713;
        </button>
        <button type="text" title="Close Removing" onClick={toggleInserting}>
          X
        </button>
      </CheckAndX>
    );
  }
}

export default PositiveButtons;
