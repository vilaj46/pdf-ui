import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import actions from "../../../../actions/modalsActions";

const Container = styled.div`
  width: 100%;
  position: absolute;
  left: calc(100% + 23px);
  top: -15px;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Expansion(props) {
  // Local Props
  const { closeModalExpansion, update } = props;

  // Redux Store Props
  const { modals } = props;
  const { expansionData } = modals;
  const { text, startPage, endPage } = expansionData;

  // State
  const [textValue, setTextValue] = React.useState(text);
  const [endPageValue, setEndPageValue] = React.useState(endPage);
  const [startPageValue, setStartPageValue] = React.useState(startPage);

  const onChange = (e) => {
    const { id, value } = e.target;

    if (id === "textValue") {
      setTextValue(value);
    } else if (id === "startPageValue") {
      setStartPageValue(value);
    } else {
      setEndPageValue(value);
    }
  };

  const onClick = () => {
    update({
      ...expansionData,
      text: textValue,
      startPage: startPageValue,
      endPage: endPageValue,
      updatedFromExpansion: true,
    });
    closeModalExpansion();
  };

  return (
    <Container>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Header Expanded</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={closeModalExpansion}></button>
          </div>
        </div>
        <div className="window-body">
          <div className="field-row-stacked">
            <label htmlFor="textValue">Header Text:</label>
            <Textarea
              id="textValue"
              value={textValue}
              rows="8"
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="field-row-stacked">
            <label htmlFor="startPageValue">Starting Page:</label>
            <input
              id="startPageValue"
              type="text"
              value={startPageValue}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="field-row-stacked">
            <label htmlFor="endPageValue">Ending Page:</label>
            <input
              id="endPageValue"
              type="text"
              value={endPageValue}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <BottomButtons>
          <button onClick={onClick}>Ok</button>
          <button onClick={closeModalExpansion}>Cancel</button>
        </BottomButtons>
      </div>
    </Container>
  );
}

const { closeModalExpansion } = actions;

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps, { closeModalExpansion })(Expansion);
