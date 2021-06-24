import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

function Expansion({ expansionObj }) {
  const { expansion, setExpansion } = expansionObj;
  const { text, startPage, endPage } = expansion;
  console.log(text);
  return (
    <Container>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">aaaa</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button
              aria-label="Close"
              onClick={() => setExpansion({})}
            ></button>
          </div>
        </div>
        <div className="window-body">body</div>
      </div>
    </Container>
  );
}

export default Expansion;
