import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledLink = styled(Link)<{
  $match: PathMatch<string> | null;
  $colors: typeof Colors;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ $match, $colors }) =>
    $match ? $colors.PRIMARY : $colors.SECONDARY};
  text-decoration: none;
  &:hover {
    color: ${({ $colors }) => $colors.PRIMARY_LIGHT};
  }
`;
