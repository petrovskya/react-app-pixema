import React from "react";
import { SvgIcon } from "@mui/material";

import { StyledAddFavoriteButton } from "./styles";

interface AddFavoriteButtonProps {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  $isFavorite: boolean;
}

export const AddFavoriteButton = ({ component, onClick, $isFavorite }: AddFavoriteButtonProps) => (
  <StyledAddFavoriteButton $isFavorite={$isFavorite} onClick={onClick}>
    <SvgIcon component={component} inheritViewBox />
    {$isFavorite ? <>Delete from favorites</> : <>Add to favorites</>}
  </StyledAddFavoriteButton>
);
