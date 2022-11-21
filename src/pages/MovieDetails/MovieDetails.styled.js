import styled from 'styled-components';
import { NavLink, Link as BackLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export const BackIcon = styled(HiArrowLeft)`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: ${p => p.theme.fontSizes.xl};

  &.active {
    color: ${p => p.theme.colors.hover};
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

export const Layout = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  text-align: center;
`;

export const AditionText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-transform: uppercase;
`;

export const Link = styled(BackLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.colors.black};

  :hover {
    color: ${p => p.theme.colors.hover};
  }
`;
