import React, { InputHTMLAttributes } from "react";

import { FilterButton } from "components";

import { SearchInput, StyledCircleIcon, StyledSearchInputGroup } from "./styles";

interface SearchInputGroupProps {
  placeholder: string;
  isFiltered: boolean;
  props: InputHTMLAttributes<HTMLInputElement>;
  onClick: () => void;
}

export const SearchInputGroup = ({
  props,
  isFiltered,
  placeholder,
  onClick,
}: SearchInputGroupProps) => {
  return (
    <StyledSearchInputGroup>
      <SearchInput {...props} placeholder={placeholder} />
      <FilterButton onClick={onClick} />
      {isFiltered && <StyledCircleIcon />}
    </StyledSearchInputGroup>
  );
};
