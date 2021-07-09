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

function HeaderLine(props) {
  const { line, index, updateLines, addLine, removeLine } = props;
  const [focused, setFocused] = React.useState(false);

  const randID = Math.floor(Math.random() * 1000000);

  const onChange = (e, index) => {
    const { value } = e.target;
    updateLines(index, value);
  };

  const onKeyDown = (e) => {
    const { keyCode } = e;
    const { selectionStart } = e.target;

    if (keyCode === 13) {
      addLine(selectionStart, index);
    }
  };

  const mouseEnter = () => {
    const input = document.getElementById(randID);
    input.focus();
  };

  const onFocus = () => {
    setFocused(true);
  };

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
        <button
          type="text"
          title="Remove Line"
          style={{
            position: "absolute",
            right: "-100px",
          }}
        >
          X
        </button>
      )}
    </InputContainer>
  );
}
export default HeaderLine;
