import styled from "styled-components";

import { Color } from "ui";

export const StyledShowMoreButton = styled.button`
  display: grid;
  gap: 5px;
  width: 161px;
  padding: 8px 24px;
  margin: 40px auto;
  background-color: ${Color.GRAPHITE};
  border-radius: 40px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Color.WHITE};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Color.PRIMARY_LIGHT};
  }
`;
