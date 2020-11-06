import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  font-family: "Roboto Slab", serif;
  color: #000;

  button {
    color: #fff;
    background: #000;
    font-size: 20px;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: red;
    }
  }

  table {
    border-radius: 5px;
    background: #000;
    td {
      border: 0.1em solid black;
      border-radius: 5px;
      background: #fff;
      padding: 10px;
    }
  }

  ${(props) =>
    !props.display  &&
    css`
      & {
        display: none;
      }
    `}
`;
