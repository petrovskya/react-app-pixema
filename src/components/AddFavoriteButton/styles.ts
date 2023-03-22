import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledAddFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 54px;
  background-color: ${Colors.GRAPHITE};
  border: 1px solid ${Colors.DARK};
  border-radius: 10px;
  color: ${Colors.LIGHT};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
