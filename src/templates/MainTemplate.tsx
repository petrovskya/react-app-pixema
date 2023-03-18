import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '../components/Nav';
import { LogoIconLight, LogoIconDark } from 'assets';
import { Colors } from 'ui/colors';
import { ROUTE } from 'router/routes';
import { CustomLink } from 'components/CustomLink';

export const MainTemplate = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <LogoIconLight />
        <StyledSearchInput placeholder='Search' />
        <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
      </StyledHeader>

      <Nav />
      <Outlet />
      <StyledText>© All Rights Reserved</StyledText>
    </StyledMain>
  );
};
export const StyledMain = styled.div`
  height: 100vh;
  padding: 40px 62px 64px;
  background: ${Colors.DARK};
`;
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 66% 1fr;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;
export const StyledSearchInput = styled.input`
  width: 100%;
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
  color: ${Colors.DARK};
  border-color: ${Colors.LIGHT};
`;
export const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.LIGHT};
`;
