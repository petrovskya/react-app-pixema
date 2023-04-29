import styled from "styled-components";

import { Color, Media } from "ui";

export const StyledConfirmMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25vh 25vw;
  width: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 35px;
  color: ${Color.WHITE};
  ${Media.LAPTOP_S} {
    padding: 15vh 15vw;
    font-size: 18px;
  }
  ${Media.TABLET} {
    padding: 10vh 10vw;
    text-align: center;
  }
  ${Media.MOBILE_S} {
    padding: 10px 10px;
    font-size: 16px;
    text-align: center;
  }
`;
