import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
   font-family: 'Exo 2', 'san-serif';
  }
  input {
    border: none;
  }
  button { 
    border: none;
    font-family: inherit;
  }
  ul {
    list-style-type: none;
  }
`;
