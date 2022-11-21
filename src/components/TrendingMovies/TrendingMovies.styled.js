import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 15px;
  list-style: none;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
`;

export const Item = styled.li`
  box-shadow: 10px 9px 14px -6px rgba(0, 0, 0, 0.75);
  border-radius: ${p => p.theme.radii.normal};
  transition: box-shadow, scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    box-shadow: 10px 7px 13px -6px rgba(255, 107, 8, 0.72);
    scale: 1.02;
  }
`;

export const MovieTitle = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
`;
