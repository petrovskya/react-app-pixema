import styled from "styled-components";

import { Color, Media } from "ui";

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  color: ${Color.WHITE};
  ${Media.TABLET} {
    gap: 20px;
  }
`;

const UserInitials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 10px;
  background: ${Color.PRIMARY};
  font-size: 20px;
  font-weight: 700;
  color: ${Color.WHITE};
  &:hover {
    background: ${Color.PRIMARY_LIGHT};
  }
`;

const UserName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90px;
  font-size: 18px;
  font-weight: 500;
`;

export { StyledUserInfo, UserInitials, UserName };
