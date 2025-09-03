import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 70px;
  background: #3b7d5bff;

`;

/* Área da esquerda  */
export const LeftArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled(NavLink)`
  padding: 15px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  text-decoration: none;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #efb034ff;
  font-weight: 500;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    font-weight: 700;
    color: #ffd447ff;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #ffd447ff;
    }
  }
`;


/* Area central */
export const CentralArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const Tittle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  color: #ffd447ff;
`;


/* Área da direita  */
export const RightArea = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* Butão de linguagem */
export const LanguageButton = styled.button`
  position: relative;
  width: 75px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 11px;
  line-height: 18px;
  font-weight: 700;
  color: #3b7d5bff;
  background: #ffd447ff;
  opacity: 1;
  border: none;
  border-radius: 14px;
  gap: 4px;
  z-index:2;

  &:hover {
    color: #3b7d5bff;
    background: #ffd447ff;
  }

  &:active {
    color: #3b7d5bff;
    background: #ffd447ff;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    fill: #3b7d5bff;
    width: 12px;
    height: 12px;
  }
`;

export const TextboxContainer = styled.div`
  position: relative;
  width: 250px;
  height: 36px;
  flex-shrink: 0;
`;

export const TextboxInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 30px; 
  font-family: Montserrat;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #3B7D5B;
  outline: none;

  &:hover {
    color: #FFD447;
    border-color: #2F6549;
  }

  &:focus {
    color: #000000;
    border-color: #3B7D5B;
  }

  &:disabled {
    color: #FFD447;
    border-color: #3B7D5B;
    background: #ffffff;
  }
`;

/* Ícones */
export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 12px; 
  transform: translateY(-50%); 
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    fill: #FFD447;
  }
`;
