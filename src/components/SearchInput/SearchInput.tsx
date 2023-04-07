import React, { InputHTMLAttributes } from "react";
import { StyledSearchInput } from "./styles";

export const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledSearchInput {...props} />;
};
