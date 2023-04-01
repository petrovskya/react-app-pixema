import React, { MouseEventHandler } from "react";
import { StyledShowMoreButton } from "./styles";

interface ShowMoreButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const ShowMoreButton = ({ type, onClick }: ShowMoreButtonProps) => {
  return (
    <StyledShowMoreButton type={type} onClick={onClick}>
      Show more
    </StyledShowMoreButton>
  );
};
