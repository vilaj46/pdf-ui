import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import actions from "../../../../../actions/modalsActions";

export const SmallButton = styled.button`
  width: 3%;
  // min-width in xp.css was effecting width.
  min-width: 20px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
`;

function MouseEnterButtons(props) {
  const { remove, data } = props; // From Header component.
  const { expandModalExpansion } = props; // From redux store.

  const payload = {
    expansion: "headers",
    expansionData: data,
  };

  return (
    <React.Fragment>
      <SmallButton onClick={() => remove(data)}>X</SmallButton>
      <SmallButton
        onClick={() => expandModalExpansion(payload)}
      >{`>`}</SmallButton>
    </React.Fragment>
  );
}

const { expandModalExpansion } = actions;

export default connect(null, { expandModalExpansion })(MouseEnterButtons);
