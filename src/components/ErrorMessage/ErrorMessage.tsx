import ErrorImage from "assets";

import { StyledErrorMessage } from "./styles";

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <StyledErrorMessage>
    <img src={ErrorImage} alt="error" />
    <span>{error}</span>
  </StyledErrorMessage>
);
