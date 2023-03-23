import { BackgroundImage } from 'assets';
import styled, { CSSProperties } from 'styled-components';
export const StyledAuthTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 40px 62px 64px;
  background-image: url('${BackgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Logo: CSSProperties = {
  position: 'fixed',
  top: '48px',
  left: '62px',
};
