import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  font-family: "Roboto Slab", serif;
  span{
    font-size: 14px;
    margin-bottom: 5px;
    color: #000;
  }

  @media(max-width: 420px){
      width: 350px;
      font-size: 10px;
    }

    @media(max-width: 350px){
      width: 300px;
      font-size: 8px;
    }
`;