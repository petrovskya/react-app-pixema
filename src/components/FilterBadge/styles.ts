import styled from "styled-components";

import { Color } from "ui";

export const StyledFilterBadge = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  gap: 10px;
  width: 153px;
  height: 40px;

  background: ${Color.GRAPHITE};
  border-radius: 40px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.WHITE};

  &:hover {
    background: ${Color.LIGHT};
  }
`;
