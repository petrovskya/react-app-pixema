import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { SignFormValues } from "types";

import { InputWrapper, StyledSettingsInput } from "./styles";

export interface InputProps {
  placeholder: string;
  name: "email" | "password" | "confirmPassword" | "name";
  register: UseFormRegister<SignFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
}

export const SettingsInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  title,
}: InputProps) => {
  return (
    <InputWrapper>
      <p>{title}</p>
      <StyledSettingsInput
        placeholder={placeholder}
        type={type}
        {...register(name, {
          required: required,
        })}
      />
    </InputWrapper>
  );
};
