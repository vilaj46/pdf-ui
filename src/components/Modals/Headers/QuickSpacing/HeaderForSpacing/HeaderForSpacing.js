import { Item, ResetButton } from "../Styles";

import HeaderLine from "./HeaderLine/HeaderLine";

function HeaderForSpacing(props) {
  const { header, update, createdLines, remove } = props;

  const customUpdate = (newText, index) => {
    let newStr = "";
    createdLines.forEach((line, i) => {
      if (i === createdLines.length - 1) {
        if (i === index) {
          newStr = newStr + newText;
        } else {
          newStr = newStr + line;
        }
      } else {
        if (i === index) {
          newStr = newStr + newText + "\n\n";
        } else {
          newStr = newStr + line + "\n\n";
        }
      }
    });
    const newHeader = {
      ...header,
      text: newStr,
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
      remove(header);
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
      update({
        ...header,
        text: beforeText + afterText,
      });
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

export default HeaderForSpacing;
