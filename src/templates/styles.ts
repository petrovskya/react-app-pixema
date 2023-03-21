import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  max-width: 100vw;
  min-height: 100vh;
  padding: 40px 62px 64px;
  background: ${Colors.DARK};
`;

export const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledMenu = styled.div`
  position: fixed;
`;
export const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  color: ${Colors.LIGHT};
`;
export const FixedWrapContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 62px 0 368px;
  width: 100%;
`;
export const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 100%;
  padding: 40px 0 56px;
  margin: 0 -15px;
  background: ${Colors.DARK};
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  margin: 0 15px;
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
export const StyledUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 15px;
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-left: 307px;
  margin-top: 64px;
`;
