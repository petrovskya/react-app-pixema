import { InputHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";

import { ROUTE } from "router";
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
  const { pathname } = useLocation();
  const getAvailable = () => {
    return pathname === ROUTE.HOME || pathname === `/${ROUTE.TRENDS}` ? true : false;
  };
  const isAvailable = getAvailable();
  return (
    <StyledSearchInputGroup>
      <SearchInput disabled={!isAvailable} {...props} placeholder={placeholder} />
      {isAvailable && <FilterButton onClick={onClick} />}
      {isFiltered && <StyledCircleIcon />}
    </StyledSearchInputGroup>
  );
};
