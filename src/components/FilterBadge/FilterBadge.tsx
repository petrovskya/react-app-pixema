import { CancelIcon } from "assets";
import { Button, CancelButton } from "components";
import React from "react";
import { StyledFilterBadge } from "./styles";
import { Color } from "ui";

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
