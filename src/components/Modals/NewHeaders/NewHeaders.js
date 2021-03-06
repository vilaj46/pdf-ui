import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Utils
import spaceLines from "./utils/spaceLines";
import findHeaderById from "./utils/findHeaderById";
import createBlankHeader from "./utils/createBlankHeader";
import getHeadersFromTocText from "./utils/getHeadersFromTocText";

// Components
import TocTab from "./TocTab/TocTab";
import Header from "./Header/Header";
import HeadersMenu from "./HeadersMenu/HeadersMenu";
import PositiveButtons from "./PositiveButtons/PositiveButtons";
import NegativeButtons from "./NegativeButtons/NegativeButtons";

// API
import sendHeadersToBackend from "../../../api/sendHeadersToBackend";

// Actions
import fileActions from "../../../actions/fileActions";
import modalsActions from "../../../actions/modalsActions";

const Container = styled.section`
  position: relative;
`;

function NewHeaders(props) {
  // Redux Actions
  const {
    changeBlob,
    closeModal,
    disableApp,
    enableApp,
    changeFilePath,
    changeMetadata,
  } = props;

  // Redux State
  const { pageCount, fileName, filePath, metadata } = props;

  // State
  const [headers, setHeaders] = React.useState([]);
  const [tab, setTab] = React.useState("tab-Main");
  const [tocText, setTocText] = React.useState("");
  const [removing, setRemoving] = React.useState(false);
  const [inserting, setInserting] = React.useState(false);
  const [markedForDeletion, setMarkedForDeletion] = React.useState([]);
  const [markedForInsertion, setMarkedForInsertion] = React.useState([]);

  /**
   * @param {Object} e - onChange event object.
   * Sets the toc text and updates the textarea.
   */
  const changeTocString = (e) => {
    const { value } = e.target;
    setTocText(value);
  };

  /**
   * We click the "Ok" button to add the toc headers
   * to our current headers. Then return to the main tab
   * and clear the toc textarea.
   */
  const addTocHeaders = () => {
    const tocHeaders = getHeadersFromTocText(tocText, headers);
    const newHeaders = [...headers].concat(tocHeaders);
    setHeaders(newHeaders);
    setTab("tab-Main");
    setTocText("");
  };

  /**
   * Creates a new blank header and adds to end of the array.
   * Then queries our document and moves our camera into view.
   */
  const addHeader = () => {
    const newHeader = createBlankHeader(headers);
    const newHeaders = headers.concat([newHeader]);
    setHeaders(newHeaders);
    const headerElements = Array.from(document.querySelectorAll(".header"));
    try {
      headerElements[headerElements.length - 1].scrollIntoView();
    } catch {
      // not into view I guess.
    }
  };

  /**
   * @param {Object} header - Header object.
   * Checks if the index is the same.
   * If not traverse the array and remove the header.
   */
  const removeHeader = (header) => {
    const { index, idNumber } = header;
    const headerAtIndex = headers[index];
    if (headerAtIndex.idNumber === idNumber) {
      const newHeaders = [...headers];
      newHeaders.splice(index, 1);
      setHeaders(newHeaders);
    } else {
      const found = findHeaderById(idNumber, headers);
      if (found !== -1) {
        const newHeaders = [...headers];
        newHeaders.splice(found, 1);
        setHeaders(newHeaders);
      }
    }
  };

  /**
   * @param {Object} newHeader - Header object with changed values.
   * We don't know whats changed but we update the header anyway.
   * Use the index first to find the header if not traverse
   * the array and update the header by replacing it with the new one.
   */
  const updateHeader = (newHeader) => {
    const { index, idNumber } = newHeader;
    const headerAtIndex = headers[index];
    if (headerAtIndex.idNumber === idNumber) {
      const newHeaders = [...headers];
      newHeaders[index] = newHeader;
      setHeaders(newHeaders);
    } else {
      const found = findHeaderById(idNumber, headers);
      if (found !== -1) {
        const newHeaders = [...headers];
        newHeaders[found] = newHeader;
        setHeaders(newHeaders);
      }
    }
  };

  /**
   * Iterate over the array and space each line.
   * Then upgrade the headers.
   */
  const spaceHeaders = () => {
    const newHeaders = headers.map((header) => {
      const newHeader = spaceLines(header, false);
      return newHeader;
    });

    setHeaders(newHeaders);
  };

  /**
   * Combine the header lines into one.
   * Then upgrade the headers.
   */
  const removeSpace = () => {
    const newHeaders = headers.map((header) => {
      const newHeader = spaceLines(header, true);
      return newHeader;
    });
    setHeaders(newHeaders);
  };

  /**
   * Swap the removing state.
   * If we have headers marked for deletion,
   * remove them from the array.
   */
  const toggleRemoving = () => {
    setRemoving(!removing);
    if (!removing && markedForDeletion.length > 0) {
      setMarkedForDeletion([]);
    }
  };

  /**
   * Swap the inserting state.
   * If we have headers marked for insertion,
   * remove them from the array.
   */
  const toggleInserting = () => {
    setInserting(!inserting);
    if (!inserting && markedForInsertion.length > 0) {
      setMarkedForInsertion([]);
    }
  };

  /**
   * @param {String} idNumber - Header identifier.
   * Add the header idNumber to the array.
   */
  const addForDeletion = (idNumber) => {
    const newMarked = [...markedForDeletion];
    newMarked.push(idNumber);
    setMarkedForDeletion(newMarked);
  };

  /**
   * @param {String} idNumber - Header identifier.
   * Add the header idNumber to the array.
   */
  const addForInsertion = (idNumber) => {
    const newMarked = [...markedForInsertion];
    newMarked.push(idNumber);
    setMarkedForInsertion(newMarked);
  };

  /**
   * @param {String} idNumber - Header identifier.
   * Remove the header idNumber from the array.
   */
  const removeForDeletion = (idNumber) => {
    let newMarked = [];
    markedForDeletion.forEach((marked) => {
      if (idNumber !== marked) {
        newMarked.push(marked);
      }
    });
    setMarkedForDeletion(newMarked);
  };

  /**
   * @param {String} idNumber - Header identifier.
   * Remove the header idNumber from the array.
   */
  const removeForInsertion = (idNumber) => {
    let newMarked = [];
    markedForInsertion.forEach((marked) => {
      if (idNumber !== marked) {
        newMarked.push(marked);
      }
    });
    setMarkedForInsertion(newMarked);
  };

  /**
   * Iterate over the headers. If the idNumber is also
   * in the markedForDeletion array, remove it from the headers.
   * Set the new headers, clear the markedForDeletion array,
   * and switch back to normal mode.
   */
  const removeMarkedForDeletion = () => {
    let newHeaders = [];
    headers.forEach((header) => {
      const { idNumber } = header;
      if (!markedForDeletion.includes(idNumber)) {
        newHeaders.push(header);
      }
    });
    setHeaders(newHeaders);
    setMarkedForDeletion([]);
    setRemoving(false);
  };

  /**
   * Iterate over the markedForInsertion array.
   * Find the index of the header in our headers array.
   * Then add a new blank header above it. Set the new headers.
   * Clear the markedForInsertion array and switch back to normal
   * mode.
   */
  const insertHeadersIntoPositions = () => {
    let newHeaders = [...headers];
    markedForInsertion.forEach((idNumber) => {
      const indexOfPosition = findHeaderById(idNumber, newHeaders);
      const newHeader = createBlankHeader(newHeaders, "", -1, -1);
      newHeaders.splice(indexOfPosition, 0, newHeader);
    });
    setHeaders(newHeaders);
    setMarkedForInsertion([]);
    setInserting(false);
  };

  /**
   * Iterate over the headers. Combine the lines and create
   * a combined string. If the text length is 0 after trimming,
   * remove the header.
   */
  const removeBlankHeaders = () => {
    const newHeaders = headers.filter((header) => {
      const { lines } = header;
      let text = "";
      lines.forEach((line) => {
        text = text + line;
      });

      if (text.trim().length === 0) {
        return false;
      } else {
        return true;
      }
    });
    setHeaders(newHeaders);
  };

  const applyHeaders = async () => {
    disableApp();
    const res = await sendHeadersToBackend(headers, {
      fileName,
      filePath,
      metadata,
    });
    const { newBlob, newFilePath, newMetadata } = res;
    const blob = URL.createObjectURL(newBlob);
    changeBlob(blob);
    closeModal();
    enableApp();
    changeFilePath(newFilePath);
    changeMetadata(newMetadata);
  };

  const addPageRanges = () => {
    const newHeaders = headers.map((header, index) => {
      const { lines, startPage } = header;
      const endPage = calculateEndPage(index);
      let newLines = [...lines];
      if (endPage - startPage > 0) {
        const pageRange = `[pages ${startPage}-${endPage}]`;
        if (lines.length === 1) {
          newLines.push(pageRange);
        } else {
          const lastLineIndex = findLastLineWithText(lines);
          const lineBeforeLast =
            lines[lastLineIndex - 1].trim() + " " + pageRange;
          const lineBeforeBefore = lines[lastLineIndex - 2].trim();
          if (lineBeforeBefore.length >= lineBeforeLast.length) {
            newLines[lastLineIndex - 1] = lineBeforeLast;
          } else {
            newLines.splice(lastLineIndex, 0, pageRange);
          }
        }
      }
      const newHeader = {
        ...header,
        lines: newLines,
      };
      return newHeader;
    });
    setHeaders(newHeaders);
  };

  const findLastLineWithText = (lines) => {
    let index = -1;

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.length > 0) {
        index = i + 1;
      }
    });

    return index;
  };

  const calculateEndPage = (index) => {
    try {
      const nextHeader = headers[index + 1];
      const { endPage } = nextHeader;
      return Number(endPage) - 1;
    } catch {
      return Number(pageCount);
    }
  };

  const clearHeaders = () => {
    setHeaders([]);
  };

  const removePageRanges = () => {
    const newHeaders = headers.map((header) => {
      const regex = /\[pages\s+\d+\s+to\s+\d+\]/gi;
      const { lines } = header;
      let newLines = [];
      lines.forEach((line) => {
        const searched = line.search(regex);
        if (searched !== -1) {
          const newLine = line.replace(regex, "");
          if (newLine.trim().length > 0) {
            newLines.push(newLine);
          }
        } else {
          newLines.push(line);
        }
      });

      return {
        ...header,
        lines: newLines,
      };
    });
    setHeaders(newHeaders);
  };

  const removeBlankLines = () => {
    const newHeaders = headers.map((header) => {
      const { lines } = header;
      let newLines = [];
      lines.forEach((line) => {
        const trimmed = line.trim();
        if (line.length > 0) {
          newLines.push(trimmed);
        }
      });
      return {
        ...header,
        lines: newLines,
      };
    });

    setHeaders(newHeaders);
  };

  return (
    <Container>
      <PositiveButtons
        inserting={inserting}
        addHeader={addHeader}
        applyHeaders={applyHeaders}
        spaceHeaders={spaceHeaders}
        addPageRanges={addPageRanges}
        toggleInserting={toggleInserting}
        insertHeadersIntoPositions={insertHeadersIntoPositions}
      />
      <NegativeButtons
        removing={removing}
        removeSpace={removeSpace}
        clearHeaders={clearHeaders}
        toggleRemoving={toggleRemoving}
        removePageRanges={removePageRanges}
        removeBlankLines={removeBlankLines}
        removeBlankHeaders={removeBlankHeaders}
        removeMarkedForDeletion={removeMarkedForDeletion}
      />
      <section className="tabs">
        <HeadersMenu tab={tab} setTab={setTab} />
        {tab === "tab-Main" && (
          <article role="tabpanel">
            {headers.map((header) => {
              const { idNumber } = header;
              return (
                <Header
                  key={idNumber}
                  header={header}
                  removing={removing}
                  inserting={inserting}
                  removeHeader={removeHeader}
                  updateHeader={updateHeader}
                  addForDeletion={addForDeletion}
                  addForInsertion={addForInsertion}
                  removeForDeletion={removeForDeletion}
                  markedForDeletion={markedForDeletion}
                  markedForInsertion={markedForInsertion}
                  removeForInsertion={removeForInsertion}
                />
              );
            })}
          </article>
        )}
        {tab === "tab-Toc" && (
          <article role="tabpanel" id="tab-Toc">
            <TocTab
              tocText={tocText}
              addTocHeaders={addTocHeaders}
              changeTocString={changeTocString}
            />
          </article>
        )}
      </section>
    </Container>
  );
}

const { changeBlob, enableApp, disableApp, changeFilePath, changeMetadata } =
  fileActions;
const { closeModal } = modalsActions;

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    ...file,
  };
};

export default connect(mapStateToProps, {
  changeBlob,
  closeModal,
  enableApp,
  disableApp,
  changeFilePath,
  changeMetadata,
})(NewHeaders);
