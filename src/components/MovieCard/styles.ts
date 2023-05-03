import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

import { Color } from "ui";
import { FavoritesIcon } from "assets";

const StyledMovieYear = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;

const StyledMovieCard = styled.li`
  position: relative;
  display: grid;
`;

const StyledCheckbox = styled(Checkbox)({
  "&.MuiCheckbox-root": {
    position: "absolute",
    top: "15px",
    right: "10px",
    padding: "1px 2px",
    backgroundColor: Color.DARK,
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: Color.DARK,
    },
  },
  // ".PrivateSwitchBase-input": {
  //   position: "absolute",
  // },
});

const CheckedIcon = styled(FavoritesIcon)({
  fill: Color.PRIMARY,
});

const BorderIcon = styled(FavoritesIcon)({
  stroke: Color.PRIMARY,
  strokeWidth: "2px",
});

export { StyledMovieCard, StyledMovieYear, CheckedIcon, StyledCheckbox, BorderIcon };
