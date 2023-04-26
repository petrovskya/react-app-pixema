import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

import { FilterFormValues } from "types";

import { InputTitle, InputWrapper, StyledInput } from "./styles";

export interface FilterInputProps {
  placeholder: string;
  name: "title" | "year";
  register: UseFormRegister<FilterFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
}
export const FilterInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  title,
}: FilterInputProps) => {
  return (
    <InputWrapper>
      <InputTitle>{title}</InputTitle>
      <StyledInput
        placeholder={placeholder}
        type={type}
        {...register(name, {
          required: required,
        })}
      />
    </InputWrapper>
  );
};
