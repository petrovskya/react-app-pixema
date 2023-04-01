import styled, { createGlobalStyle } from "styled-components";
import { Color, themeColors } from "ui";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ${themeColors}
  body {
   font-family: 'Exo 2', 'san-serif';
  }
  input {
    /* border: none; */
  }
  button { 
    border: none;
    font-family: inherit;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    &:active {
      color: ${Color.PRIMARY_LIGHT};
    }
    /* &:visited {
      color: ${Color.PRIMARY};
    } */
  }
`;

export const CopyrightText = styled.div`
  position: fixed;
  bottom: 64px;
  color: ${Color.WHITE};
`;
export const FormWrapper = styled.div`
  display: grid;
  gap: 40px;
  width: 574px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${Color.DARK};
`;
export const FormTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: ${Color.WHITE};
`;
export const FormText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;

  color: ${Color.WHITE};
`;
