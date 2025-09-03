import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    border: none;
    text-decoration: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #fdf5e6;
    color: #000;
    line-height: 1.5;
  }

`

export default GlobalStyle;