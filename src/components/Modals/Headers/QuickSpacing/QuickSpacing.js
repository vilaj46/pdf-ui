import React from "react";
import styled from "styled-components";

const Item = styled.li`
  border: 1px solid lightgray;
  list-style-type: none;
  margin: 10px 0;
`;

const Line = styled.button`
  display: block;
  text-align: center;
  margin: auto;
  outline: none;
  border: none;
  background: none;
  background-color: #ffffff;
  color: #333;
`;

const Input = styled.input`
  display: block;
  border: 2px solid red !important;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  resize: none;
  white-space: nowrap;
  overflow-x: scroll;
`;

function QuickSpacing(props) {
  const { headers, update } = props;

  return (
    <div>
      {headers.map((header) => {
        const { text } = header;

        const createdLines = createLines(text);
        // console.log(createdLines);
        return (
          <HeaderForSpacing
            header={header}
            key={header.idNumber}
            update={update}
            createdLines={createdLines}
          />
        );
      })}
    </div>
  );
}

function HeaderForSpacing(props) {
  const { header, update, createdLines } = props;

  const customUpdate = (newText) => {
    const newHeader = {
      ...header,
      text: newText,
    };
    update(newHeader);
  };

  const addLine = (beforeText, afterText, position) => {
    // Insert blank line above current position.
    if (beforeText.length === 0) {
      const indexOfAfterText = header.text.indexOf(afterText);
      const restBefore = header.text.slice(0, indexOfAfterText);
      const restAfter = header.text.slice(indexOfAfterText, header.text.length);

      update({
        ...header,
        text: restBefore + "\n \n\n" + restAfter,
      });
    } else if (afterText.length === 0) {
      // Insert Blank line after current position.
      update({
        ...header,
        text: header.text + "\n\n",
      });
    } else {
      const indexOfBeforeText = header.text.indexOf(beforeText);
      const indexOfAfterText = header.text.indexOf(afterText);
      const restAfter = header.text.slice(
        indexOfAfterText + afterText.length,
        header.text.length
      );
      const restBefore = header.text.slice(0, indexOfBeforeText);
      update({
        ...header,
        text: restBefore + beforeText + "\n\n" + afterText + restAfter,
      });
    }
  };

  return (
    <Item>
      {createdLines.map((line, index) => {
        return (
          <HeaderLine
            text={line}
            key={line + index}
            update={customUpdate}
            index={index}
            addLine={addLine}
          />
        );
      })}
    </Item>
  );
}

function HeaderLine(props) {
  const { text, index, addLine } = props;
  const [focused, setFocused] = React.useState(false);
  const [textValue, setTextValue] = React.useState(text);

  const onKeyPress = (e) => {
    const { keyCode } = e;
    const { selectionStart } = e.target;
    if (keyCode === 13) {
      const beforeEnter = textValue.slice(0, selectionStart).trim();
      const afterEnter = textValue
        .slice(selectionStart, textValue.length)
        .trim();
      setTextValue(beforeEnter);
      addLine(beforeEnter, afterEnter, index);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  if (!focused) {
    const border = textValue.length <= 0 ? "1px solid lightgray" : "none";

    return (
      <Line
        style={{ border }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {text}
      </Line>
    );
  } else {
    return (
      <Input
        type="text"
        value={textValue}
        autoFocus={true}
        onKeyDown={(e) => onKeyPress(e)}
        onChange={(e) => onChange(e)}
        onBlur={() => setFocused(false)}
        rows="0"
      />
    );
  }
}

function createLines(text) {
  const newLines = /\n{2,}/gi;
  const split = text.split(newLines);
  if (text.includes("Statement")) {
    console.log(text);
  }
  let lines = [];
  split.forEach((line) => {
    const trimmed = line.trim();
    lines.push(trimmed);
  });

  return lines;
}

export default QuickSpacing;
