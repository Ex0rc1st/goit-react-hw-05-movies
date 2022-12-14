import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xl};

  &.active {
    color: blue;
    text-decoration: underline;
  }

  :not(.active) {
    :hover {
      color: ${p => p.theme.colors.textColor};
    }
  }
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const Layout = styled.header`
  display: flex;
  align-items: 'center';
  padding-left: 40px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.header};
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.pageBgColor};
`;
