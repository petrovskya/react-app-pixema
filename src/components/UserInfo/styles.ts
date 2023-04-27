import styled from "styled-components";
import { Color } from "ui";

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  color: ${Color.WHITE};
`;
const UserInitials = styled.div`
  display: flex;
  justify-content: center;
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
  align-items: center;
  flex-wrap: wrap;
  width: 90px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export { StyledUserInfo, UserInitials, UserName };
