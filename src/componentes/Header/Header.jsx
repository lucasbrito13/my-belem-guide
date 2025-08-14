import React from 'react';
import { Container, LeftArea, Nav, MenuItem, CentralArea, LogoImg, Tittle, RightArea, LanguageButton, TextboxContainer, TextboxInput, SearchIconWrapper} from './styled';
import TranslateIcon from '../../assets/icons8-google-tradutor.svg?react';
import ImgIcon from '../../assets/brotar.png'
import SearchIcon from '../../assets/icons8-pesquisar.svg?react'

const Header = () => {
  return (
    <header>
      <Container>
        {/* Area Esquerda do Header */}
        <LeftArea>
          <Nav>
          <MenuItem to="/" end>Home</MenuItem>
          <MenuItem to="/Categories">Categorias</MenuItem>
          <MenuItem to="/About">Sobre</MenuItem>
          <MenuItem to="/Contact">Contatos</MenuItem>
        </Nav>
        </LeftArea>
          {/* Area central do Header */}
        <CentralArea>
          <LogoImg src={ImgIcon} alt="Icon MyBelémGuide" />
          <Tittle>MyBelémGuide</Tittle>
        </CentralArea>
          {/* Area direita do Header */}
        <RightArea>
          <LanguageButton>
            <TranslateIcon />
            Português
          </LanguageButton>

          <TextboxContainer>
            <SearchIconWrapper>
              <SearchIcon />
              </SearchIconWrapper>
            
            <TextboxInput placeholder="Procurar em Belém..." />
          </TextboxContainer>
        </RightArea>
      </Container>
    </header>
  );
};

export default Header;
