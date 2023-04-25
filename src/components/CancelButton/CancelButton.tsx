import { ButtonProps } from "types";

import { StyledCancelButton } from "./styles";

export const CancelButton = ({ type, children }: ButtonProps) => {
  return <StyledCancelButton type={type}>{children}</StyledCancelButton>;
};
