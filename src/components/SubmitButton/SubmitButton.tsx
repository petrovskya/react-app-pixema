import { ButtonProps } from "types";

import { StyledSubmitButton } from "./styles";

export const SubmitButton = ({ type, children }: ButtonProps) => (
  <StyledSubmitButton type={type}>{children}</StyledSubmitButton>
);
