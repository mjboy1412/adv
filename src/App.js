import React, { useState } from 'react';

import {
  StyledApp,
  StyledSideMenu,
  StyledImage,
  StyledButton,
  StyledMainContent,
} from './styles';
import playerAvatar from './assets/img/player-avatar.png';
import { SubHeader } from './components/SubHeader';
import { Header } from './components/Header';
import Bussinesses from './views/Businesses';

function App() {
  const [currentView, setCurrentView] = useState('main');
  return (
    <StyledApp>
      <StyledSideMenu> 
        <StyledImage
          src={playerAvatar}
          alt="player avatar"
        />
        <SubHeader
          color="white"
          margin="10px 0px 20px 0px"
        >
          Player Name
        </SubHeader>
        <StyledButton>
          <SubHeader
            color="#524d4a"
            margin="30px 0px"
          >
            Bussinesses
          </SubHeader>
        </StyledButton>
        <StyledButton>
          <SubHeader
            color="#524d4a"
            margin="30px 0px"
          >
            Hire Managers
          </SubHeader>
        </StyledButton>
      </StyledSideMenu>
      <StyledMainContent> 
        <Header
          color="white"
          margin="0px 0px 40px 0px"
        >
          $ 1000000
        </Header>
        <Bussinesses />
      </StyledMainContent>
    </StyledApp>  
  );
}

export default App;
