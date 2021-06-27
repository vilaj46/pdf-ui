import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import actions from "../../../../../actions/modalsActions";

// Local

export const SmallButton = styled.button`
  width: 3%;
  // min-width in xp.css was effecting width.
  min-width: 20px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
`;

function MouseEnterButtons(props) {
  // Local Props
  const { remove, data } = props;

  // Redux Store Props
  const { expandModalExpansion, closeModalExpansion, modals } = props;
  const { expansionData } = modals;

  // Misc
  const arrow = expansionData.idNumber === data.idNumber ? `<` : `>`;

  const clickExpand = () => {
    const payload = {
      expansion: "headers",
      expansionData: data,
    };

    const { idNumber } = data;
    const expansionID = expansionData.idNumber;

    if (idNumber === expansionID) {
      closeModalExpansion();
    } else if (Object.keys(expansionData).length === 0) {
      expandModalExpansion(payload);
    } else {
      closeModalExpansion();
      setTimeout(() => {
        expandModalExpansion(payload);
      }, 100);
    }
  };

  return (
    <React.Fragment>
      <SmallButton onClick={() => remove(data)}>X</SmallButton>
      <SmallButton onClick={clickExpand}>{arrow}</SmallButton>
    </React.Fragment>
  );
}

const { expandModalExpansion, closeModalExpansion } = actions;

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps, {
  expandModalExpansion,
  closeModalExpansion,
})(MouseEnterButtons);
