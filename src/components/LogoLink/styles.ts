import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "ui";

export const StyledLogoLink = styled(Link)<{ fill: Color | string }>(({ fill }) => {
  if (fill === "#fff") {
    return {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
    };
  }
});
