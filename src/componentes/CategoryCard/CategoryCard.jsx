import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização

const Card = styled.div`
  background: #fff;
  width: 319px;
  height: 271px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px; 
  border-width: 2px; 
  border-color: #5C2A9D00;
  border-style: solid; 
  box-shadow: 0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F;

  &:hover{
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`

const IconWarapper = styled.div`
  background: ${(props) => props.bgColor};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 40px;
    height: 40px;
    color: #ffffff;
    fill: #ffffff;
    stroke: #ffffff;
  }

`

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 24px;
  line-height:32px;
  font-weight: 600;
  color: #242524FF;
  margin: 5px;
`

const Description = styled.p`
  width: 268px;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #8C8D8BFF;
  text-align: center;
`

const StyledLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #3B7D5BFF;

  margin-top: 15px;

  &:hover{
  color: #FFD447FF;
  }
`

// Exportação

export default function CategoryCard({icon,image, title, description, to, index }) {

  const bgColors = ["#3b7d5b", "#efb034"];
  const bgColor = bgColors[index % 2];

  return (
     <Card>
      <IconWarapper bgColor={bgColor}>{icon}</IconWarapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <StyledLink to={to}>Ver mais</StyledLink>
    </Card>
  );
}

