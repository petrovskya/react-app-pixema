import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledButton = styled.button`
  border-radius: 10px;
  background: ${Colors.PRIMARY};
  padding: 0 16px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${Colors.WHITE};
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
