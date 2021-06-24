import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Header from "./Header/Header";

// Local Data
import { HEADER_INPUT_DELAY } from "../../localData";

// Utils
import utils from "./utils";

const TopButtons = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

function Headers({ expansionObj, modals }) {
  // Props
  const { openModal } = modals;
  const { setExpansion } = expansionObj;

  // State
  const [headers, setHeaders] = React.useState([]);
  const [disableAdd, setDisableAdd] = React.useState(false);

  // Misc
  const display = openModal === "Headers" ? true : false;

  const add = () => {
    const newHeader = utils.createBlankHeader(headers);
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
      const found = utils.findHeaderById(idNumber, headers);
      if (found !== -1) {
        newHeaders.splice(found, 1);
        setHeaders(newHeaders);
      }
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
      const found = utils.findHeaderById(idNumber, headers);
      if (found !== -1) {
        newHeaders[found] = header;
        setHeaders(newHeaders);
      }
    }
  };

  const actions = {
    remove,
    update,
    setExpansion,
  };

  return (
    display && (
      <div>
        <TopButtons>
          <button onClick={add} disabled={disableAdd}>
            Add
          </button>
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
              />
            );
          })}
        </ul>
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  const { modals } = state;
  return {
    modals,
  };
};

export default connect(mapStateToProps)(Headers);
