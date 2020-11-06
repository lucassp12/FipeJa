import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  img {
    width: 135px;
    height: 150px;
  }
`;

export const ContainerButtons = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;

  ${(props) =>
    props.display &&
    css`
      & {
        display: none;
      }
    `}

    @media(max-width: 320px){
      width: 300px;
    }

    @media(max-width: 420px){
      width: 300px;
    }
`;

export const ButtonSelectVehicle = styled.button`
  border: 0;
  border-bottom: 7px solid transparent;
  background: none;
  width: 50px;
  transition: 0.3s;

  ${(props) =>
    props.checked &&
    css`
      & {
        color: red;
        border-bottom: 7px solid red;
      }
    `}

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const ContainerInputs = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  select {
    width: 400px;
    border-radius: 10px;
    padding: 20px;

    font-size: 16px;

    &:not(first-child) {
      margin-bottom: 10px;
    }

    @media(max-width: 420px){
      width: 350px;
    }

    @media(max-width: 350px){
      width: 300px;
    }
  }

  button {
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border: none;
    border-radius: 10px;

    color: #fff;
    background: #000;
    transition: 0.3s;

    &:hover {
      background: red;
    }
  }

  ${(props) =>
    props.display &&
    css`
      & {
        display: none;
      }
    `}
`;

