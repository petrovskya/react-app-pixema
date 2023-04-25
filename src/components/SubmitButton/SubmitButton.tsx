import { ButtonProps } from "types";

import { StyledSubmitButton } from "./styles";

export const SubmitButton = ({ type, children }: ButtonProps) => {
  return <StyledSubmitButton type={type}>{children}</StyledSubmitButton>;
};
