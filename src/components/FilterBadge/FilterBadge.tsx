import React from "react";

import { CancelIcon } from "assets";
import { Color } from "ui";

import { StyledFilterBadge } from "./styles";

interface FilterBadgeProps {
  label: string;
  onClick: () => void;
}
export const FilterBadge = ({ label, onClick }: FilterBadgeProps) => {
  return (
    <StyledFilterBadge onClick={onClick}>
      {label}
      <CancelIcon fill={Color.WHITE} width="16px" />
    </StyledFilterBadge>
  );
};
