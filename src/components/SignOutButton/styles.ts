import styled from "styled-components";

import { SignOutIcon } from "assets";
import { Color } from "ui";

const StyledSignOutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: transparent;
`;

const StyledSignOutIcon = styled(SignOutIcon)`
  width: 30px;
  height: 30px;
  fill: ${Color.PRIMARY};
  cursor: pointer;

  &:hover {
    fill: ${Color.PRIMARY_LIGHT};
  }
`;

export { StyledSignOutButton, StyledSignOutIcon };
