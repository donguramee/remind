import styled from "styled-components";

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 0 10px;
  height: 50px;
  width: 680px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  background-color: #ededed;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgb(238, 139, 90);
  border-radius: 5px; /* Adjusted border-radius */
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked::before {
    content: "✔";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
  }
`;
export const Item = styled.span`
  font-family: TheJamsil3Regular;
`;
export const Delete = styled.div`
  width: 50px;
  height: 50px;
`;
