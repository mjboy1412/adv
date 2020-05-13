import styled from 'styled-components';

export const StyledBusinessesView = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledBusinessItem = styled.div`
  display: flex;
  height: 150px;
  width: 600px;
  align-items: center;
`;

export const StyledHead = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  background: #8bb8cf;
  border-radius: 50%;
  border: 3px solid #3b3630;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const StyledQuantity = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 42px;
  border-radius: 27px;
  display: flex;
  background: #3b3630;
  justify-content: center;
  align-items: center;
  bottom: -7px;
`;

export const StyledContent = styled.div`
  height: 100%;
  width: calc(100% - 150px);
  box-sizing: border-box;
  padding: 0px 20px;
  justify-content: space-between;
`;

export const StyledRevenue = styled.div`
  height: 50px;
  width: 100%;
  background: #736960;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  height: 56px;
  width: 63%;
  background: #e0884a;
  border: none;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const StyledTime = styled.div`
  height: 50px;
  width: 25%;
  background: #8c8176;
`;
