import React from "react";
import styled from "styled-components";

// Utils
import compareArrays from "../utils/compareArrays";

// Components
import HeaderLine from "./HeaderLine/HeaderLine";

const TopHeader = styled.div`
  display: flex;
`;

const HeaderContainer = styled.div`
  border: 1px dashed black;
  margin-bottom: 10px;
  padding: 10px;

  &:hover {
    border: 2px dashed yellow;
  }
`;

function Header(props) {
  const {
    header,
    removing,
    inserting,
    removeHeader,
    updateHeader,
    addForDeletion,
    addForInsertion,
    removeForDeletion,
    markedForDeletion,
    markedForInsertion,
    removeForInsertion,
  } = props;

  // Properties
  const { lines, idNumber } = header;

  // Misc that effects properties or state
  const isMarkedForRemoval = markedForDeletion.includes(idNumber);
  const isMarkedForInsertion = markedForInsertion.includes(idNumber);

  // State
  const [linesValue, setLinesValue] = React.useState(lines);
  const [checkedForRemoval, setCheckedForRemoval] =
    React.useState(isMarkedForRemoval);
  const [checkedForInsertion, setCheckedForInsertion] =
    React.useState(isMarkedForInsertion);

  // Checkmarks were not being updated.
  // Update checkmarks if we 'X' out of Remove Headers.
  if (checkedForRemoval !== isMarkedForRemoval) {
    setCheckedForRemoval(isMarkedForRemoval);
  }

  // Checkmarks were not being updated
  // Update checkmarks if we 'X' out of Insert Headers.
  if (checkedForInsertion !== isMarkedForInsertion) {
    setCheckedForInsertion(isMarkedForInsertion);
  }

  // // Not sure why this is here.
  React.useEffect(() => {
    const linesEqual = compareArrays(lines, linesValue);
    if (linesEqual === false) {
      setLinesValue(lines);
    }
  }, [setLinesValue, lines, linesValue]);

  /**
   * @param {Number} index - Line index.
   * @param {String} value - New line value.
   * Update the Header lines then update the header
   * in the headers array.
   */
  const updateLines = (index, value) => {
    const newLines = [...linesValue];
    newLines[index] = value;
    setLinesValue(newLines);
    const newHeader = {
      ...header,
      lines: newLines,
    };
    updateHeader(newHeader);
  };

  /**
   * @param {Object} e - Event object.
   * Changes the page range depending on the
   * name of the input we've changed.
   */
  const updatePageRange = (e) => {
    const { name, value } = e.target;
    const newHeader = {
      ...header,
    };
    newHeader[name] = value;
    updateHeader(newHeader);
  };

  /**
   * @param {Number} selectionStart - Index of string where we've hit "enter".
   * @param {Number} index - Index of the line we've hit "enter" in.
   * Insert line if we've hit enter before the first char.
   * Insert line if we've hit enter after the last char.
   * Otherwise, split the lines in two.
   * Update the new lines, then update the new header.
   */
  const addLine = (selectionStart, index) => {
    const line = linesValue[index];
    const newLines = [...linesValue];
    if (selectionStart === 0) {
      newLines.splice(index, 0, "");
    } else if (line.length === selectionStart) {
      newLines.splice(index + 1, 0, "");
    } else {
      const beforeEnter = line.slice(0, selectionStart).trim();
      const afterEnter = line.slice(selectionStart, line.length).trim();
      newLines[index] = beforeEnter;
      newLines.splice(index + 1, 0, afterEnter);
    }
    setLinesValue(newLines);
    const newHeader = {
      ...header,
      lines: newLines,
    };
    updateHeader(newHeader);
  };

  /**
   * @param {Number} index - Index of the line to be removed.
   * If there is only 1 line, we are removing the header altogether.
   * Otherwise, just remove the line.
   */
  const removeLine = (index) => {
    const newLines = [...lines];
    newLines.splice(index, 1);
    setLinesValue(newLines);

    if (newLines.length === 0) {
      removeHeader(header);
    } else {
      const newHeader = {
        ...header,
        lines: newLines,
      };
      updateHeader(newHeader);
    }
  };

  /***
   * Toggle the checkmark for removal.
   * Updates the visual check.
   */
  const toggleRemovalCheck = () => {
    setCheckedForRemoval(!checkedForRemoval);
    if (!checkedForRemoval) {
      addForDeletion(idNumber);
    } else {
      removeForDeletion(idNumber);
    }
  };

  /***
   * Toggle the checkmark for insertion.
   * Updates the visual check.
   */
  const toggleInsertionCheck = () => {
    setCheckedForInsertion(!checkedForInsertion);
    if (!checkedForInsertion) {
      addForInsertion(idNumber);
    } else {
      removeForInsertion(idNumber);
    }
  };

  return (
    <HeaderContainer>
      <TopHeader>
        {removing && (
          <input
            type="checkbox"
            checked={checkedForRemoval}
            onChange={toggleRemovalCheck}
          />
        )}
        {removing && <label onClick={toggleRemovalCheck}>Delete</label>}
        {inserting && (
          <input
            type="checkbox"
            checked={checkedForInsertion}
            onChange={toggleInsertionCheck}
          />
        )}
        {inserting && <label onClick={toggleInsertionCheck}>Insertion</label>}
        <div style={{ marginLeft: "auto" }}>
          <label>Start Page:</label>
          <input
            type="text"
            name="startPage"
            value={header.startPage}
            onChange={(e) => updatePageRange(e)}
          />
          <label>End Page:</label>
          <input
            type="text"
            name="endPage"
            value={header.endPage}
            onChange={(e) => updatePageRange(e)}
          />
        </div>
      </TopHeader>
      <div className="header">
        {linesValue.map((line, index) => {
          return (
            <HeaderLine
              type="text"
              line={line}
              index={index}
              key={index}
              addLine={addLine}
              removeLine={removeLine}
              updateLines={updateLines}
            />
          );
        })}
      </div>
    </HeaderContainer>
  );
}
export default Header;
