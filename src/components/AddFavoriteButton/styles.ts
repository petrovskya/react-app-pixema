import styled from "styled-components";
import { Color } from "ui";

export const StyledAddFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 54px;
  background-color: ${Color.GRAPHITE};
  border: 1px solid ${Color.DARK};
  border-radius: 10px;
  color: ${Color.LIGHT};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${Color.WHITE};
  }
`;
