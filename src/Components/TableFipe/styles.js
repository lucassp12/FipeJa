import styled, { css} from 'styled-components';


export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;

  button {
    color: #fff;
    background: #000;
    font-size: 20px;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: red;
    }
  }

  td {
    border: 1px solid black;
    padding: 10px;
  }

  ${(props) =>
    !props.display &&
    css`
      & {
        display: none;
      }
    `}



`;