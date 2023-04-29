import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { SignFormValues } from "types";

import { InputWrapper, StyledInput } from "./styles";

export interface InputProps {
  placeholder: string;
  name: "email" | "password" | "confirmPassword" | "name";
  register: UseFormRegister<SignFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
}

export const Input = ({ register, required, type, name, placeholder, title }: InputProps) => (
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
