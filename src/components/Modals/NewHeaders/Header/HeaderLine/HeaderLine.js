import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  border: 1px solid lightgray !important;
  width: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const Xbutton = styled.button`
  position: absolute;
  right: -110px;
`;

function HeaderLine(props) {
  // Properties
  const { line, index, updateLines, addLine, removeLine } = props;

  // State
  const [focused, setFocused] = React.useState(false);

  // Misc
  const randID = Math.floor(Math.random() * 1000000);

  // Update header lines on line change.
  const onChange = (e, index) => {
    const { value } = e.target;
    updateLines(index, value);
  };

  // Track when the user hits 'enter' and add the appropriate line.
  const onKeyDown = (e) => {
    const { keyCode } = e;
    const { selectionStart } = e.target;

    if (keyCode === 13) {
      addLine(selectionStart, index);
    }
  };

  // Automatically focus on the text input
  // if we hover over it.
  const mouseEnter = () => {
    const input = document.getElementById(randID);
    input.focus();
  };

  // Toggle focus to true.
  // Will show the 'x' button.
  const onFocus = () => {
    setFocused(true);
  };

  // Toggle focus to false.
  // If we blur stop showing the 'x' button.
  // If we click the 'x' button blur and
  // remove the line
  const onBlur = (e) => {
    setFocused(false);
    try {
      const { title } = e.relatedTarget;
      if (title === "Remove Line") {
        removeLine(index);
      }
    } catch {
      // We didn't click the "X" button.
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={line}
        key={index}
        index={index}
        onChange={(e) => onChange(e, index)}
        onKeyDown={onKeyDown}
        onMouseEnter={mouseEnter}
        onFocus={onFocus}
        onBlur={(e) => onBlur(e)}
        id={randID}
      />
      {focused && (
        <Xbutton type="text" title="Remove Line">
          X
        </Xbutton>
      )}
    </InputContainer>
  );
}
export default HeaderLine;
