import { ButtonProps } from "types";

import { StyledCancelButton } from "./styles";

export const CancelButton = ({ type, children }: ButtonProps) => (
  <StyledCancelButton type={type}>{children}</StyledCancelButton>
);
