import { FilterIcon } from "assets";
import { Color } from "ui";

import { StyledFilterButton } from "./styles";

interface FilterButtonProps {
  onClick: () => void;
}

export const FilterButton = ({ onClick }: FilterButtonProps) => (
  <StyledFilterButton onClick={onClick}>
    <FilterIcon fill={Color.WHITE} />
  </StyledFilterButton>
);
