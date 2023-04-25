import React from "react";
import { StyledFilterButton } from "./styles";
import { FilterIcon } from "assets";
import { Color } from "ui";

interface FilterButtonProps {
  onClick: () => void;
}
export const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <StyledFilterButton onClick={onClick}>
      <FilterIcon fill={Color.WHITE} />
    </StyledFilterButton>
  );
};
