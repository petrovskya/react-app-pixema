import React from "react";
import { SvgIcon } from "@mui/material";

import { StyledAddFavoriteButton } from "./styles";

interface AddFavoriteButtonProps {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const AddFavoriteButton = ({ component }: AddFavoriteButtonProps) => (
  <StyledAddFavoriteButton>
    <SvgIcon component={component} inheritViewBox />
    Add to favorites
  </StyledAddFavoriteButton>
);
