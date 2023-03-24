import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  background-color: ${Colors.GRAPHITE};
  &:focus {
    outline-color: ${Colors.PRIMARY};
    border: 2px solid ${Colors.PRIMARY};
    color: ${Colors.WHITE};
  }
`;
export const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
`;
