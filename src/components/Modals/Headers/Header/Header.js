import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  width: 55%;
  padding: 0;
  margin: 0;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;
  display: block;
`;

const NumberContainer = styled.div`
  width: 15%;
`;

const NumberInput = styled.input`
  height: 95%;
  width: 100%;
`;

const SmallButton = styled.button`
  width: 3%;
  // min-width in xp.css was effecting width.
  min-width: 20px;
  text-align: center;
`;

function Header({ data, actions }) {
  // Props
  const { remove, update, setExpansion } = actions;
  const { text, startPage, endPage } = data;

  // State
  const [textValue, setTextValue] = React.useState(text);
  const [endPageValue, setEndPageValue] = React.useState(endPage);
  const [displayButtons, setDisplayButtons] = React.useState(false);
  const [startPageValue, setStartPageValue] = React.useState(startPage);

  const timeoutRef = React.useRef(null); // REF TO KEEP TRACK OF THE TIMEOUT

  React.useEffect(() => {
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
      });
    }, 500);
  }, [textValue]);

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "textValue") {
      setTextValue(value);
    } else if (name === "startPageValue") {
      setStartPageValue(value);
    } else {
      setEndPageValue(value);
    }
  };

  const onMouseEnter = () => {
    setDisplayButtons(true);
  };

  const onMouseLeave = () => {
    setDisplayButtons(false);
  };

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <TextContainer className="field-row">
        <TextInput
          type="text"
          name="textValue"
          value={textValue}
          onChange={(e) => onChange(e)}
        />
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
      {displayButtons && (
        <SmallButton onClick={() => remove(data)}>X</SmallButton>
      )}
      {displayButtons && (
        <SmallButton onClick={() => setExpansion(data)}>{`>`}</SmallButton>
      )}
    </Container>
  );
}

export default Header;
