import styled from "styled-components";

const CheckboxContainer = styled.div`
  padding-top: 5px;
  margin: 0 10px;
`;

function Checkbox() {
  return (
    <CheckboxContainer>
      <input type="checkbox" id="autoSpace" style={{ margin: "auto" }} />
      <label htmlFor="autoSpace">Auto Space</label>
    </CheckboxContainer>
  );
}

export default Checkbox;
