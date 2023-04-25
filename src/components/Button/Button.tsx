import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onClick?: () => void;
  $background?: string;
}

export const Button = ({ type, children, onClick, $background }: ButtonProps) => {
  return (
    <StyledButton $background={$background} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
