import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 50px;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  color: ${Colors.SECONDARY};
  img {
    max-width: 405px;
    height: 360px;
  }
`;
