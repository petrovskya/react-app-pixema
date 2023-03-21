import React from 'react';
import { StyledErrorMessage } from './styles';
import ErrorImage from './../../assets/images/error-image.png';

interface ErrorMessageProps {
  error: string;
}
export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <StyledErrorMessage>
      <img src={ErrorImage} alt='error' />
      <span>{error}</span>
    </StyledErrorMessage>
  );
};
