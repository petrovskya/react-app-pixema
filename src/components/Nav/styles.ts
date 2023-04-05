import styled from "styled-components";
import { Media } from "ui";

export const StyledNav = styled.nav`
  display: grid;
  place-content: start;
  gap: 40px;
  margin-top: 64px;
  ${Media.LAPTOP_M} {
    display: none;
  }
`;
