import React from "react";
import { StyledSignOutButton, StyledSignOutIcon } from "./styles";

interface SignOutButtonProps {
  onClick: () => void;
}
export const SignOutButton = ({ onClick }: SignOutButtonProps) => {
  return (
    <StyledSignOutButton onClick={onClick}>
      <StyledSignOutIcon />
    </StyledSignOutButton>
  );
};
