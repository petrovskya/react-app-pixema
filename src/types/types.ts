import { ReactNode } from "react";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInFormValues {
  email: string;
  password: string;
}

interface SignFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SettingsFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  newPassword: string;
}

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onClick?: () => void;
}

interface FilterFormValues {
  title: string;
  year: string;
}

export type {
  SignUpFormValues,
  SignInFormValues,
  SignFormValues,
  ButtonProps,
  FilterFormValues,
  SettingsFormValues,
};
