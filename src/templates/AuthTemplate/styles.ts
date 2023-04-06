import { AuthBackgroundImage } from "assets";
import styled from "styled-components";
import { Media } from "ui";

export const StyledAuthTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100vw;
  height: 100vh;
  padding: 40px 62px 64px;
  background-image: url("${AuthBackgroundImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: scroll;
  ${Media.MOBILE_M} {
    overflow-y: scroll;
    padding: 32px 24px;
  }
`;
