import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 160px 77%;
  gap: 146px;
  height: 100vh;
  padding: 40px 62px 64px;
  background: ${Colors.DARK};
`;
export const StyledAside = styled.div`
  position: fixed;
  z-index: 1;
  top: 40px;
  left: 62px;
  display: grid;
  place-content: start;
  gap: 64px;
  height: 100vh;
  margin-top: 8px;
`;
export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
`;
export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 40px;
  left: 368px;
  display: flex;
  gap: 40px;
  width: 77%;
`;
export const StyledSearchInput = styled.input`
  width: 80%;
  padding: 16px 20px;
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
export const StyledOutlet = styled.div`
  margin-top: 112px;
  margin-left: 306px;
`;
export const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.LIGHT};
`;
