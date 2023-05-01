import styled from "styled-components";

import { Color, Media } from "ui";

export const StyledConfirmEmailMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px 25px;
  margin: 0 auto;
  background-color: ${Color.PRIMARY};
  border-radius: 25px;
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
