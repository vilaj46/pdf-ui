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

const ResetButton = styled.button`
  min-width: 10px;
  min-height: 10px;
  display: block;
  margin-left: auto;
`;

const LineFlex = styled.div`
  display: flex;
`;

const RemoveButton = styled.button`
  display: block;
  min-width: 10px;
  min-height: 10px;
  max-height: 20px;
  margin-top: auto;
  margin-bottom: auto;
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

  const customUpdate = (newText) => {
    const newHeader = {
      ...header,
      text: newText,
    };
    update(newHeader);
  };

  const addLine = (beforeText, afterText) => {
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

  const resetSpacing = () => {
    const regex = /\n/gi;
    const { text } = header;
    let newText = text.replace(regex, " ");
    const regex2 = /\s{2,}/gi;
    newText = newText.replace(regex2, " ");
    const newHeader = {
      ...header,
      text: newText,
    };
    update(newHeader);
  };

  const removeLine = (index) => {
    // We've removed a header with one line.
    if (createdLines.length === 1) {
      update({
        ...header,
        text: "",
      });
    } else if (index === createdLines.length - 1) {
      // We've removed the end of the header.
      const { text } = header;
      const textForRemoval = createdLines[index];
      const indexOfRemoval = text.indexOf(textForRemoval);
      let newText = text.slice(0, indexOfRemoval);

      while (newText.endsWith("\n")) {
        newText = newText.slice(0, newText.length - 1);
      }

      update({
        ...header,
        text: newText,
      });
    } else {
      // Removed a line inbetween.
      const { text } = header;
      const textForRemoval = createdLines[index];
      const indexOfRemoval = text.indexOf(textForRemoval);
      const beforeText = text.slice(0, indexOfRemoval);
      const afterText = text.slice(
        indexOfRemoval + textForRemoval.length,
        text.length
      );
      console.log(beforeText);
      console.log(afterText);
    }
  };

  return (
    <Item>
      <ResetButton title="Reset" onClick={resetSpacing}>
        R
      </ResetButton>
      {createdLines.map((line, index) => {
        return (
          <HeaderLine
            text={line}
            key={line + index}
            update={customUpdate}
            index={index}
            addLine={addLine}
            removeLine={removeLine}
          />
        );
      })}
    </Item>
  );
}

function HeaderLine(props) {
  const { text, index, addLine, removeLine } = props;
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
      addLine(beforeEnter, afterEnter);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const onBlur = (e) => {
    try {
      const { title } = e.relatedTarget;
      if (title === "Remove") {
        removeLine(index);
      }
    } catch {
      // We didn't click anything special.
    }

    setFocused(false);
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
      <LineFlex onClick={() => console.log("argh!")}>
        <Input
          type="text"
          value={textValue}
          autoFocus={true}
          onKeyDown={(e) => onKeyPress(e)}
          onChange={(e) => onChange(e)}
          // onBlur={() => setFocused(false)}
          onBlur={(e) => onBlur(e)}
          rows="0"
        />
        <RemoveButton title="Remove" onClick={() => console.log("CLICKED")}>
          x
        </RemoveButton>
      </LineFlex>
    );
  }
}

function createLines(text) {
  const newLines = /\n{2,}/gi;
  const split = text.split(newLines);
  let lines = [];
  split.forEach((line) => {
    const trimmed = line.trim();
    lines.push(trimmed);
  });

  return lines;
}

export default QuickSpacing;
