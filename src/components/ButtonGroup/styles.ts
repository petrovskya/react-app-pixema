import styled from "styled-components";

interface StyledButtonGoup {
  position: string;
}
export const StyledButtonGroup = styled.div<StyledButtonGoup>`
  display: flex;
  width: 100%;
  justify-content: ${({ position }) => position};
  gap: 40px;
`;
