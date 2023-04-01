import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

export const Button = ({ type, children }: ButtonProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
