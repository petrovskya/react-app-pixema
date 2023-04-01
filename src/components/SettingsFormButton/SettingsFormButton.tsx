import React, { ReactNode } from "react";
import { StyledSettingsFormButton } from "./styles";

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

export const SettingsFormButton = ({ type, children }: ButtonProps) => {
  return <StyledSettingsFormButton type={type}>{children}</StyledSettingsFormButton>;
};
