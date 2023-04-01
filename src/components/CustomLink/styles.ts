import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const StyledLink = styled(Link)<{
  $match: PathMatch<string> | null;
  $Color: typeof Color;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ $match, $Color }) => ($match ? $Color.PRIMARY : $Color.SECONDARY)};
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: ${({ $Color }) => $Color.PRIMARY_LIGHT};
  }
`;
