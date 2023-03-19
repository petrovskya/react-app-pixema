import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledShowMoreButton = styled.button`
  width: 161px;
  padding: 8px 24px;
  margin: 0 auto;
  background-color: ${Colors.GRAPHITE};
  border-radius: 40px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Colors.WHITE};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.PRIMARY_LIGHT};
  }
`;
