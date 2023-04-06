import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledSignUpForm = styled.form`
  display: grid;
  gap: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
  ${Media.MOBILE_M} {
    gap: 15px;
  }
`;
