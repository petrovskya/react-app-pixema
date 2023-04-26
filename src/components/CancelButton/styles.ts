import styled from "styled-components";

import { Color, Media } from "ui";

export const StyledCancelButton = styled.button`
  width: 30%;
  padding: 16px 0;
  margin-top: 20px;
  border-radius: 10px;
  background: ${Color.SECONDARY};
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${Color.WHITE};
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${Color.LIGHT};
  }

  ${Media.LAPTOP_S} {
    width: 50%;
  }
`;
