import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { FilterFormValues } from "types";

import { InputTitle, InputWrapper, StyledInput } from "./styles";
import { FormError } from "ui";

export interface FilterInputProps {
  placeholder: string;
  name: "title" | "year";
  register: UseFormRegister<FilterFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  title: string;
  error: string | undefined;
  validateFunction: () => RegisterOptions;
}

export const FilterInput = ({
  required,
  type,
  name,
  placeholder,
  title,
  error,
  register,
  validateFunction,
}: FilterInputProps) => {
  const isValid = error ? false : true;
  return (
    <InputWrapper>
      <InputTitle>{title}</InputTitle>
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
