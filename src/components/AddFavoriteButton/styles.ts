import styled from "styled-components";

import { Color } from "ui";

export const StyledAddFavoriteButton = styled.button<{ $isFavorite: boolean }>(
  ({ $isFavorite }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: " 10px",
    padding: "16px 54px",
    backgroundColor: $isFavorite ? Color.PRIMARY : Color.GRAPHITE,
    border: `1px solid ${Color.DARK}`,
    borderRadius: "10px",
    color: Color.LIGHT,
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      color: Color.WHITE,
      backgroundColor: Color.PRIMARY,
    },
    "&:active": {
      backgroundColor: Color.PRIMARY_LIGHT,
    },
  }),
);
