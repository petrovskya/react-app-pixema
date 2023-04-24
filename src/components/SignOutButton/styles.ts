import { SignOutIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui";

export const StyledSignOutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: transparent;
`;
export const StyledSignOutIcon = styled(SignOutIcon)`
  width: 30px;
  height: 30px;
  fill: ${Color.PRIMARY};
  cursor: pointer;

  &:hover {
    fill: ${Color.PRIMARY_LIGHT};
  }
`;
