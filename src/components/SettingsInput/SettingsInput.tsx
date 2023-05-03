import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { SettingsFormValues } from "types";
import { FormError } from "ui";

import { InputWrapper, StyledSettingsInput } from "./styles";

export interface InputProps {
  placeholder?: string;
  name: "email" | "password" | "confirmPassword" | "name" | "newPassword";
  register: UseFormRegister<SettingsFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
  defaultValue?: string | number | readonly string[] | undefined;
  error: string | undefined;
  validateFunction: () => RegisterOptions;
}

export const SettingsInput = ({
  register,
  type,
  name,
  placeholder,
  title,
  defaultValue,
  error,
  validateFunction,
}: InputProps) => {
  const isValid = error ? false : true;
  return (
    <InputWrapper>
      <h3>{title}</h3>
      <StyledSettingsInput
        placeholder={placeholder}
        type={type}
        {...register(name, validateFunction())}
        defaultValue={defaultValue}
        $isValid={isValid}
      />
      {error && <FormError>{error}</FormError>}
    </InputWrapper>
  );
};
