import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { FormError } from "ui";

import { InputWrapper, StyledInput } from "./styles";
import { ConfirmModalValues } from "./ConfirmModal";

export interface InputProps {
  placeholder: string;
  name: "password";
  register: UseFormRegister<ConfirmModalValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
  error: string | undefined;
  validateFunction: () => RegisterOptions;
}

export const ConfirmInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  title,
  error,
  validateFunction,
}: InputProps) => {
  const isValid = error ? false : true;
  return (
    <InputWrapper>
      <h3>{title}</h3>
      <StyledInput
        placeholder={placeholder}
        type={type}
        {...register(name, validateFunction())}
        $isValid={isValid}
      />
      {error && <FormError>{error}</FormError>}
    </InputWrapper>
  );
};
