import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { InputWrapper, StyledInput } from "./styles";
import { ConfirmModalValues } from "./ConfirmModal";

export interface InputProps {
  placeholder: string;
  name: "password";
  register: UseFormRegister<ConfirmModalValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
}

export const ConfirmInput = ({
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
