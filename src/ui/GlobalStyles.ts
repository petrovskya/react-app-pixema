import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { Color, Media, themeColors } from "ui";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ${themeColors}
  body {
   font-family: "Exo 2", "san-serif";
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
  }
`;

const CopyrightText = styled.div`
  position: fixed;
  bottom: 64px;
  color: ${Color.WHITE};
`;

const FormWrapper = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
  max-width: 574px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${Color.DARK};
  ${Media.MOBILE_M} {
    gap: 20px;
    padding: 20px 20px;
  }
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: ${Color.WHITE};
`;

const FormText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: ${Color.WHITE};
`;

const FormError = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${Color.ERROR};
`;

const StyledLink = styled(Link)`
  color: ${Color.SECONDARY};
  &:visited {
    color: ${Color.SECONDARY};
  }
`;

export { FormText, FormTitle, FormWrapper, CopyrightText, StyledLink, FormError };
