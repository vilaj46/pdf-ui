import React from "react";
import styled from "styled-components";

// App data
import { HEADER_INPUT_DELAY } from "../../../localData";

// Components
import MouseEnterButtons from "./MouseEnterButtons/MouseEnterButtons";

// CSS
// Was using onMouseEnter and onMouseLeave. Switched animation over to css.
import { SmallButton } from "./MouseEnterButtons/MouseEnterButtons";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;

  &:hover ${SmallButton} {
    opacity: 1;
    pointer-events: auto;
  }
`;

const TextContainer = styled.div`
  width: 55%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid lightgray;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;
  display: block;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`;

const NumberContainer = styled.div`
  width: 15%;
  border-bottom: 1px solid lightgray;
`;

const NumberInput = styled.input`
  height: 95%;
  width: 100%;
`;

function Header({ data, actions }) {
  // Props
  const { remove, update } = actions;
  const { text, startPage, endPage, updatedFromExpansion } = data;

  // State
  const [focused, setFocused] = React.useState(false);
  const [entered, setEntered] = React.useState(false);
  const [textValue, setTextValue] = React.useState(text);
  const [endPageValue, setEndPageValue] = React.useState(endPage);
  const [startPageValue, setStartPageValue] = React.useState(startPage);

  const timeoutRef = React.useRef(null); // REF TO KEEP TRACK OF THE TIMEOUT

  React.useEffect(() => {
    if (
      (text !== textValue ||
        startPage !== startPageValue ||
        endPage !== endPageValue) &&
      !updatedFromExpansion
    ) {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        update({
          ...data,
          text: textValue,
          startPage: startPageValue,
          endPage: endPageValue,
          updatedFromExpansion: false,
        });
      }, HEADER_INPUT_DELAY);
    } else if (
      text !== textValue ||
      startPage !== startPageValue ||
      endPage !== endPageValue
    ) {
      setTextValue(text);
      setStartPageValue(startPage);
      setEndPageValue(endPage);
    }
  }, [
    text,
    data,
    update,
    endPage,
    textValue,
    startPage,
    endPageValue,
    startPageValue,
    updatedFromExpansion,
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "textValue") {
      setTextValue(value);
    } else if (name === "startPageValue") {
      setStartPageValue(value);
    } else {
      setEndPageValue(value);
    }

    if (updatedFromExpansion) {
      update({ ...data, updatedFromExpansion: false });
    }
  };

  const onMouseEnter = () => {
    setEntered(true);
  };

  const onMouseLeave = () => {
    if (focused) {
      return;
    }
    setEntered(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <TextContainer className="field-row">
        {!entered && (
          <TextInput
            type="text"
            name="textValue"
            value={textValue}
            onChange={(e) => onChange(e)}
          />
        )}
        {entered && (
          <TextArea
            name="textValue"
            value={textValue}
            onChange={(e) => onChange(e)}
            onFocus={onFocus}
            onBlur={onBlur}
          ></TextArea>
        )}
      </TextContainer>
      <NumberContainer className="field-row">
        <NumberInput
          type="text"
          name="startPageValue"
          value={startPageValue}
          onChange={(e) => onChange(e)}
        />
      </NumberContainer>
      <NumberContainer className="field-row">
        <NumberInput
          type="text"
          name="endPageValue"
          value={endPageValue}
          onChange={(e) => onChange(e)}
        />
      </NumberContainer>
      <MouseEnterButtons remove={remove} data={data} />
    </Container>
  );
}

export default Header;
