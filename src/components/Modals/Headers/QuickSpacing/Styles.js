import styled from "styled-components";

export const Item = styled.li`
  border: 1px solid lightgray;
  list-style-type: none;
  margin: 10px 0;
`;

export const Line = styled.button`
  display: block;
  text-align: center;
  margin: auto;
  outline: none;
  border: none;
  background: none;
  background-color: #ffffff;
  color: #333;
`;

export const Input = styled.input`
  display: block;
  border: 2px solid red !important;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  resize: none;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const ResetButton = styled.button`
  min-width: 10px;
  min-height: 10px;
  display: block;
  margin-left: auto;
`;

export const LineFlex = styled.div`
  display: flex;
`;

export const RemoveButton = styled.button`
  display: block;
  min-width: 10px;
  min-height: 10px;
  max-height: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;
