import styled from 'styled-components';

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: #736960;
  display: flex;
`;

export const StyledSideMenu = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 0px 0px;
  box-sizing: border-box;
  background: rgb(87,79,71,0.8);
`;

export const StyledImage = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 50%;
`;

export const StyledButton = styled.button`
  width: 70%;
  background: #e7ded3;
  border-radius: 7px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
  height: 70px;
  margin: 10px 0px 10px 0px;
  &:hover{
    background: #8c8176;
  }
`;

export const StyledMainContent = styled.div`
  width: 85%;
  box-sizing: border-box;
  padding: 30px 60px;
`;
