import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Header from "./Header/Header";
import Expansion from "./Expansion/Expansion";
import QuickSpacing from "./QuickSpacing/QuickSpacing";

// Local Data
import { HEADER_INPUT_DELAY } from "../../localData";

// Utils
import findHeaderById from "./utils/findHeaderById";
import createBlankHeader from "./utils/createBlankHeader";
import spaceIndividualText from "./utils/spaceIndividualText";
import getHeadersFromTocText from "./utils/getHeadersFromTocText";

import actions from "../../../actions/modalsActions";

const TopButtons = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Flex = styled.div`
  position: relative;
`;

const TableOfContentsTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: vertical;
  border: 1px solid lightgray;
`;

function Headers({ modals, expandModalExpansion, closeModalExpansion }) {
  // Props
  const { openModal, expansion, expansionData } = modals;

  // State
  const [tab, setTab] = React.useState("tab-A");
  const [headers, setHeaders] = React.useState([]);
  const [tocText, setTocText] = React.useState("");
  const [disableAdd, setDisableAdd] = React.useState(false);
  const [autoSpaced, setAutoSpaced] = React.useState(false);

  // Misc
  const display = openModal === "Headers" ? true : false;

  let displayExpansion = false;

  try {
    displayExpansion = Object.keys(expansion).length > 0 ? true : false;
  } catch {
    // Above code fails if there is no expansionProps.
    // Therefore, no Expansion either. displayExpansion will remain false.
  }

  /**
   * Creates a new header with no text.
   * Inserts at the end of the headers list.
   * We disable the add button because we were getting
   * updating ui bugs.
   */
  const add = () => {
    const newHeader = createBlankHeader(headers);
    const newHeaders = [...headers];
    newHeaders.push(newHeader);
    setHeaders(newHeaders);
    setDisableAdd(true);
    setTimeout(() => {
      setDisableAdd(false);
    }, HEADER_INPUT_DELAY);
  };

  /**
   * @param {Object} header - Header object for deletion.
   * Check if the header we want to remove is still
   * at it's current index. If it isn't search for it.
   *
   * If we have have the Expansion open for the
   * Header we are deleting, close the Expansion.
   */
  const remove = (header) => {
    const { index, idNumber } = header;
    const headerAtIndex = headers[index];
    const newHeaders = [...headers];
    if (headerAtIndex.idNumber === idNumber) {
      newHeaders.splice(index, 1);
      setHeaders(newHeaders);
    } else {
      const found = findHeaderById(idNumber, headers);
      if (found !== -1) {
        newHeaders.splice(found, 1);
        setHeaders(newHeaders);
      }
    }

    const expansionID = expansionData.idNumber;
    if (expansionID === idNumber) {
      closeModalExpansion();
    }
  };

  /**
   * @param {Object} header - Header object we are updating.
   * We don't know what we are updating. Use the
   * index or the idNumber to find the header and replace.
   */
  const update = (header) => {
    const { index, idNumber } = header;
    const headerAtIndex = headers[index];
    const newHeaders = [...headers];

    if (headerAtIndex.idNumber === idNumber) {
      newHeaders[index] = header;
      setHeaders(newHeaders);
    } else {
      const found = findHeaderById(idNumber, headers);

      if (found !== -1) {
        newHeaders[found] = header;
        setHeaders(newHeaders);
      }
    }
  };

  /**
   * We've clicked "Spaced Current Headers".
   * Iterare through the current headers
   * and update the text.
   */
  const spaceCurrentText = () => {
    const newHeaders = headers.map((header) => {
      const { text } = header;
      const newHeader = {
        ...header,
        text: spaceIndividualText(text, false),
        updatedFromExpansion: true,
      };
      return newHeader;
    });
    setHeaders(newHeaders);
    setAutoSpaced(!autoSpaced);
  };

  const removeCurrentSpacing = () => {
    const newHeaders = headers.map((header) => {
      const { text } = header;
      const newHeader = {
        ...header,
        text: spaceIndividualText(text, true),
        updatedFromExpansion: true,
      };
      return newHeader;
    });
    setHeaders(newHeaders);
    setAutoSpaced(!autoSpaced);
  };

  const uploadTocString = (e) => {
    const { value } = e.target;
    setTocText(value);
  };

  const addTocHeaders = () => {
    const tocHeaders = getHeadersFromTocText(tocText, headers);
    const newHeaders = headers.concat(tocHeaders);
    setHeaders(newHeaders);
    setTocText("");
    setTab("tab-A");
  };

  const changeTab = (t) => {
    if (tocText.trim().length > 0) {
      setTocText("");
    }
    setTab(t);
  };

  const actions = {
    remove,
    update,
    closeModalExpansion,
    expandModalExpansion,
  };

  return (
    display && (
      <section className="tabs">
        <menu role="tablist" aria-label="Sample Tabs">
          <button
            role="tab"
            aria-selected={tab === "tab-A" ? "true" : false}
            aria-controls="tab-A"
            onClick={() => changeTab("tab-A")}
          >
            Main
          </button>
          <button
            role="tab"
            aria-selected={tab === "tab-B" ? "true" : false}
            aria-controls="tab-B"
            onClick={() => changeTab("tab-B")}
          >
            Quick Headers
          </button>
          <button
            role="tab"
            aria-selected={tab === "tab-C" ? "true" : false}
            aria-controls="tab-C"
            onClick={() => changeTab("tab-C")}
          >
            Table of Contents
          </button>
        </menu>
        {tab === "tab-A" && (
          <article role="tabpanel" id="tab-A">
            <Flex>
              <div>
                <TopButtons>
                  <button onClick={add} disabled={disableAdd}>
                    Add
                  </button>
                  {!autoSpaced && (
                    <button onClick={spaceCurrentText} disabled={disableAdd}>
                      Space Current Headers
                    </button>
                  )}
                  {autoSpaced && (
                    <button
                      onClick={removeCurrentSpacing}
                      disabled={disableAdd}
                    >
                      Remove Headers Spacing
                    </button>
                  )}
                </TopButtons>
                <ul>
                  {headers.map((header) => {
                    const { idNumber } = header;
                    return (
                      <Header
                        data={header}
                        key={idNumber}
                        actions={actions}
                        headers={headers}
                        update={update}
                      />
                    );
                  })}
                </ul>
              </div>
              {displayExpansion && <Expansion update={update} />}
            </Flex>
          </article>
        )}
        {tab === "tab-B" && (
          <article role="tabpanel" id="tab-B">
            <QuickSpacing headers={headers} update={update} remove={remove} />
          </article>
        )}
        {tab === "tab-C" && (
          <article role="tabpanel" id="tab-C">
            <label htmlFor="tocString">Table of Contents String:</label>
            <TableOfContentsTextArea
              htmlFor="tocString"
              value={tocText}
              onChange={(e) => uploadTocString(e)}
            />
            <button onClick={addTocHeaders}>Ok</button>
          </article>
        )}
      </section>
    )
  );
}

const { expandModalExpansion, closeModalExpansion } = actions;

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps, {
  expandModalExpansion,
  closeModalExpansion,
})(Headers);
