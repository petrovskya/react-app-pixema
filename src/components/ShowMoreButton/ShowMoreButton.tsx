import React, { MouseEventHandler, ReactNode } from "react";

import { StyledShowMoreButton } from "./styles";

interface ShowMoreButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}

export const ShowMoreButton = ({ children, type, onClick }: ShowMoreButtonProps) => (
  <StyledShowMoreButton type={type} onClick={onClick}>
    Show more {children}
  </StyledShowMoreButton>
);
