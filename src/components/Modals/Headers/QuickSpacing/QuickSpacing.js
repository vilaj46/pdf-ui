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
  const [lines, setLines] = React.useState(createdLines);
  // Split lines into <p>
  // If we hit enter add a <p> below current ones.
  // Add a remove line filter that will pull up the current
  // text in the above line.

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
      lines.splice(position, 0, "");
      update({
        ...header,
        text: "\n\n" + header.text,
      });
    } else if (afterText.length === 0) {
      lines.push("");
      update({
        ...header,
        text: header.text + "\n\n",
      });
    } else {
      lines[position] = beforeText;
      lines.splice(position + 1, 0, afterText);
      const indexOfAfterText = header.text.indexOf(afterText);
      const rest = header.text.slice(
        indexOfAfterText + afterText.length,
        header.text.length
      );
      update({
        ...header,
        text: beforeText + "\n\n\n" + afterText + "\n" + rest,
      });
    }
  };

  return (
    <Item>
      {lines.map((line, index) => {
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
  const { text, update, index, addLine } = props;
  const [focused, setFocused] = React.useState(false);
  const [textValue, setTextValue] = React.useState(text);

  const onKeyPress = (e) => {
    const { keyCode } = e;
    const { selectionStart } = e.target;
    if (keyCode === 13) {
      // selectionStart:end
      // Change this textValue to everything before selectionStart
      const beforeEnter = textValue.slice(0, selectionStart).trim();
      const afterEnter = textValue
        .slice(selectionStart, textValue.length)
        .trim();
      setTextValue(beforeEnter);
      addLine(beforeEnter, afterEnter, index);
      // Add line to this Header
      // Add \n to this text
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const onBlur = () => {
    setFocused(false);
    // update(textValue);
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
        onBlur={onBlur}
        rows="0"
      />
    );
  }
}

function createLines(text) {
  const newLines = /\n{2,}/gi;
  // text = text.replace(newLines, "\n");
  const regex = /\n/gi;
  const split = text.split(newLines);
  let lines = [];
  split.forEach((line) => {
    const trimmed = line.trim();
    lines.push(trimmed);
  });
  return lines;
}

export default QuickSpacing;
