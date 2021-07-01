import styled from "styled-components";

const TableOfContentsTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: vertical;
  border: 1px solid lightgray;
`;

function TOCTab(props) {
  const { tocText, uploadTocString, addTocHeaders } = props;
  return (
    <article role="tabpanel" id="tab-TOC">
      <label htmlFor="tocString">Table of Contents String:</label>
      <TableOfContentsTextArea
        htmlFor="tocString"
        value={tocText}
        onChange={(e) => uploadTocString(e)}
      />
      <button onClick={addTocHeaders}>Ok</button>
    </article>
  );
}

export default TOCTab;
