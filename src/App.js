import "xp.css/dist/XP.css";
import styled from "styled-components";

import Testing from "./testing/Testing"

const Container = styled.div`
  border: 3px solid black;
`;

function App() {
  return (
    <Container>
      <button>Click me...Testing</button>
      <Testing />
    </Container>
  );
}

export default App;
