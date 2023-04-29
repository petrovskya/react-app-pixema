import styled from "styled-components";

interface StyledButtonGoup {
  position: string;
}

export const StyledButtonGroup = styled.div<StyledButtonGoup>`
  display: flex;
  justify-content: ${({ position }) => position};
  width: 100%;
  gap: 40px;
`;
