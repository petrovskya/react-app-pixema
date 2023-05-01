import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { SettingsFormValues } from "types";

import { InputWrapper, StyledSettingsInput } from "./styles";

export interface InputProps {
  placeholder?: string;
  name: "email" | "password" | "confirmPassword" | "name" | "newPassword";
  register: UseFormRegister<SettingsFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
  defaultValue?: string | number | readonly string[] | undefined;
}

export const SettingsInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  title,
  defaultValue,
}: InputProps) => {
  return (
    <InputWrapper>
      <h3>{title}</h3>
      <StyledSettingsInput
        placeholder={placeholder}
        type={type}
        {...register(name, {
          required: required,
        })}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};
