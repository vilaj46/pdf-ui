import "xp.css/dist/XP.css";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid black;
`;

function App() {
  return (
    <Container>
      <button>Click me</button>
    </Container>
  );
}

export default App;
