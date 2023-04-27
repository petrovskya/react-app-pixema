import styled from "styled-components";
import { Color, Media } from "ui";

const StyledBurgerButton = styled.button`
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 16px;
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  background: ${Color.PRIMARY};
  ${Media.MOBILE_S} {
    margin-left: 0;
  }
`;

export { StyledBurgerButton };
