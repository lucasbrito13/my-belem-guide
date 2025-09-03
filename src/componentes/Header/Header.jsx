import React from 'react';
import { Container, LeftArea, Nav, MenuItem, CentralArea, LogoImg, Tittle, RightArea, LanguageButton, TextboxContainer, TextboxInput, SearchIconWrapper} from './styled';
import TranslateIcon from '../../assets/imagens/icons8-google-tradutor.svg?react';
import ImgIcon from '../../assets/imagens/brotar.png'
import SearchIcon from '../../assets/imagens/icons8-pesquisar.svg?react'
import { translations } from '../../translation';

const Header = () => {
  const [lang, setLang] = React.useState("pt");
  const translate = translations[lang];

  return (
    <header>
      <Container>
        {/* Area Esquerda do Header */}
        <LeftArea>
          <Nav>
          <MenuItem to="/" end>{translate.home}</MenuItem>
          <MenuItem to="/categories">{translate.categories}</MenuItem>
          <MenuItem to="/about">{translate.about}</MenuItem>
          <MenuItem to="/contact">{translate.contact}</MenuItem>
        </Nav>
        </LeftArea>
          {/* Area central do Header */}
        <CentralArea>
          <LogoImg src={ImgIcon} alt="Icon MyBelémGuide" />
          <Tittle>MyBelémGuide</Tittle>
        </CentralArea>
          {/* Area direita do Header */}
        <RightArea>
          <LanguageButton onClick={() => setLang( lang === "pt" ? "en" : "pt")}>
            {lang === "pt" ? "Português" : "English"}
            <TranslateIcon />
          </LanguageButton>

          <TextboxContainer>
            <SearchIconWrapper>
              <SearchIcon />
              </SearchIconWrapper>
            
            <TextboxInput placeholder={translate.search} />
          </TextboxContainer>
        </RightArea>
      </Container>
    </header>
  );
};

export default Header;
