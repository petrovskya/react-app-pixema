import React from 'react';
import { StyledErrorMessage } from './styles';

interface ErrorMessageProps {
  error: string;
}
export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <StyledErrorMessage>
      <img src='../../assets/images/error-image.png' alt='error' />
      <span>{error}</span>
    </StyledErrorMessage>
  );
};
