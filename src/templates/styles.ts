import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledTemplate = styled.div`
  display: grid;
  max-width: 100%;
  padding: 40px 62px 64px;
  background: ${Colors.DARK};
`;
export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 56px;
  max-width: 100%;
  margin-left: 307px;
  margin-top: 117px;
`;
export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 40;
  display: flex;
  gap: 40px;
  width: 86%;
  background: ${Colors.DARK};
`;
export const StyledSearchInput = styled.input`
  width: 80%;
  padding: 16px 20px;
  margin-left: 126px;
  background: ${Colors.GRAPHITE};
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.SECONDARY};
  &:focus {
    outline-color: ${Colors.PRIMARY};
    border: 2px solid ${Colors.PRIMARY};
    color: ${Colors.WHITE};
  }
`;
export const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.LIGHT};
`;
