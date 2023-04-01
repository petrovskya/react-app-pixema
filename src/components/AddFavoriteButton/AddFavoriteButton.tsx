import React from "react";
import { StyledAddFavoriteButton } from "./styles";
import { SvgIcon } from "@mui/material";

interface AddFavoriteButtonProps {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export const AddFavoriteButton = ({ component }: AddFavoriteButtonProps) => {
  return (
    <StyledAddFavoriteButton>
      <SvgIcon component={component} inheritViewBox />
      Add to favorites
    </StyledAddFavoriteButton>
  );
};
