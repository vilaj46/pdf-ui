import React from "react";
import styled from "styled-components";

// Components
import Header from "./Header/Header";

const TopButtons = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

function Headers({ modalState, expansionObj }) {
  // Props
  const { openModal } = modalState;
  const { expansion, setExpansion } = expansionObj;

  // Misc
  const display = openModal === "Headers" ? true : false;

  // State
  const [headers, setHeaders] = React.useState([]);

  const add = () => {
    const newHeader = createBlankHeader(headers);
    const newHeaders = [...headers];
    newHeaders.push(newHeader);
    setHeaders(newHeaders);
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
    console.log("UPDATING");
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
          <button onClick={add}>Add</button>
        </TopButtons>
        <ul>
          {headers.map((header) => {
            const { idNumber } = header;
            return <Header data={header} key={idNumber} actions={actions} />;
          })}
        </ul>
      </div>
    )
  );
}

/**
 * @param {Array} headers - Current headers state
 * @returns new header object.
 */
function createBlankHeader(headers) {
  return {
    text: "",
    startPage: headers.length + 1,
    endPage: headers.length + 1,
    index: headers.length,
    idNumber: Math.ceil(Math.random() * 1000000),
  };
}

/**
 * @param {String} idNumber - id of the header we are trying to find.
 * @param {Array} headers - Current headers state.
 * @returns Number of index, -1 if not found.
 */
function findHeaderById(idNumber, headers) {
  headers.forEach((header, index) => {
    if (header.idNumber === idNumber) {
      return index;
    }
  });
  return -1;
}

export default Headers;
