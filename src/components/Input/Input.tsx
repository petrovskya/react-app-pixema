import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StyledInput } from './styles';
import { SignUpFormValues } from 'components';

export interface InputProps {
  placeholder: string;
  name: 'email' | 'password' | 'confirmPassword' | 'name';
  register: UseFormRegister<SignUpFormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
}
export const Input = ({
  register,
  required,
  type,
  name,
  placeholder,
}: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      {...register(name, {
        required: required,
      })}
    />
  );
};
