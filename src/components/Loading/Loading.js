import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  opacity: 0.9;
  z-index: 11;
  position: absolute;
  background-color: #333;
`;

const Text = styled.p`
  color: yellow;
  font-size: 32px;
  text-align: center;
`;

const Hidden = styled.div`
  display: none;
`;

function Loading({ pointerEvents }) {
  if (pointerEvents === "none") {
    return (
      <Container>
        <Text>LOADING</Text>
      </Container>
    );
  } else {
    return <Hidden></Hidden>;
  }
}

export default Loading;
