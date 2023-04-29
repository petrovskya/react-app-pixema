import React, { ReactNode } from "react";

import { StyledButtonGroup } from "./styles";

interface ButtonGroupProps {
  children: ReactNode;
  position: string;
}

export const ButtonGroup = ({ children, position }: ButtonGroupProps) => (
  <StyledButtonGroup position={position}>{children}</StyledButtonGroup>
);
