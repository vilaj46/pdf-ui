import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Header from "./Header/Header";
import Expansion from "./Expansion/Expansion";

// Local Data
import { HEADER_INPUT_DELAY } from "../../localData";

// Utils
import findHeaderById from "./utils/findHeaderById";
import createBlankHeader from "./utils/createBlankHeader";
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

  // Misc
  const display = openModal === "Headers" ? true : false;

  let displayExpansion = false;

  try {
    displayExpansion = Object.keys(expansion).length > 0 ? true : false;
  } catch {
    // Above code fails if there is no expansionProps.
    // Therefore, no Expansion either. displayExpansion will remain false.
  }

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

  const spaceCurrentText = () => {
    console.log("SPACE TEXT!");
  };

  const uploadTocString = (e) => {
    const { value } = e.target;
    setTocText(value);
  };

  const addTocHeaders = () => {
    const tocHeaders = getHeadersFromTocText(tocText);
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
                  <button onClick={spaceCurrentText} disabled={disableAdd}>
                    Space Current Headers
                  </button>
                  <button>Table of Contents String</button>
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
            <p>Quick Headers</p>
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
