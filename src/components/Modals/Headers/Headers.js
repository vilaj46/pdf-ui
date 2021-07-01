import React from "react";
import { connect } from "react-redux";

// Components
import TOCTab from "./Tabs/TOCTab";
import MainTab from "./Tabs/MainTab";
import SpacingTab from "./Tabs/SpacingTab";
import TabButton from "./TabButton/TabButton";

// Local Data
import { HEADER_INPUT_DELAY } from "../../localData";

// Utils
import findHeaderById from "./utils/findHeaderById";
import createBlankHeader from "./utils/createBlankHeader";
import spaceIndividualText from "./utils/spaceIndividualText";
import getHeadersFromTocText from "./utils/getHeadersFromTocText";

import actions from "../../../actions/modalsActions";

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

  /**
   * Remove the new lines in the text.
   */
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

  /**
   * @param {Object} e - Event object.
   * onChange event for the Table of Contents String textarea.
   */
  const uploadTocString = (e) => {
    const { value } = e.target;
    setTocText(value);
  };

  /**
   * If we click "Ok" on the Table of Contents tab.
   *
   * Create headers then add them to the end of the current headers.
   * Clear the Table of Contents String textarea.
   * Return to the main tab.
   */
  const addTocHeaders = () => {
    const tocHeaders = getHeadersFromTocText(tocText, headers);
    const newHeaders = headers.concat(tocHeaders);
    setHeaders(newHeaders);
    setTocText("");
    setTab("tab-Main");
  };

  /**
   * @param {String} t - The tab we want to switch to.
   *
   * We also check if there is a current Table of Contents string.
   */
  const changeTab = (t) => {
    if (tocText.trim().length > 0) {
      setTocText("");
    }
    setTab(t);
  };

  // Header actions.
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
          <TabButton
            text="Main"
            label="tab-Main"
            onClick={changeTab}
            tab={tab}
          />
          <TabButton
            text="Spacing"
            label="tab-Spacing"
            onClick={changeTab}
            tab={tab}
          />
          <TabButton
            text="Table of Contents"
            label="tab-TOC"
            onClick={changeTab}
            tab={tab}
          />
        </menu>
        {tab === "tab-Main" && (
          <MainTab
            add={add}
            update={update}
            headers={headers}
            actions={actions}
            disableAdd={disableAdd}
            autoSpaced={autoSpaced}
            spaceCurrentText={spaceCurrentText}
            displayExpansion={displayExpansion}
            removeCurrentSpacing={removeCurrentSpacing}
          />
        )}
        {tab === "tab-Spacing" && (
          <SpacingTab headers={headers} update={update} remove={remove} />
        )}
        {tab === "tab-TOC" && (
          <TOCTab
            tocText={tocText}
            uploadTocString={uploadTocString}
            addTocHeaders={addTocHeaders}
          />
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
