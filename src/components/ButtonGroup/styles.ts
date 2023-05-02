import styled from "styled-components";
import { Media } from "ui";

interface StyledButtonGoup {
  position: string;
}

export const StyledButtonGroup = styled.div<StyledButtonGoup>`
  display: flex;
  justify-content: ${({ position }) => position};
  width: 100%;
  gap: 40px;
  ${Media.TABLET} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
