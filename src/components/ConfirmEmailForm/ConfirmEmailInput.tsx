import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { InputWrapper, StyledInput } from "./styles";

export interface InputProps {
  placeholder: string;
  name: "email";
  register: UseFormRegister<{ email: string }>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
}

export const ConfirmEmailInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  title,
}: InputProps) => (
  <InputWrapper>
    <p>{title}</p>
    <StyledInput
      placeholder={placeholder}
      type={type}
      {...register(name, {
        required: required,
      })}
    />
  </InputWrapper>
);
