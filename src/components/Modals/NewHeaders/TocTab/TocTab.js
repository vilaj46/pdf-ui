import React from "react";
import styled from "styled-components";

const TableOfContentsTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: vertical;
  border: 1px solid lightgray;
`;

function TocTab(props) {
  const { tocText, changeTocString, addTocHeaders } = props;
  return (
    <React.Fragment>
      <label htmlFor="tocString">Table of Contents String:</label>
      <TableOfContentsTextArea
        htmlFor="tocString"
        value={tocText}
        onChange={(e) => changeTocString(e)}
      />
      <button onClick={addTocHeaders}>Ok</button>
    </React.Fragment>
  );
}

export default TocTab;
