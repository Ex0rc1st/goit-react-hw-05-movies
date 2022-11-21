import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 30px 15px;
  list-style: none;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
  color: blue;
`;

export const Item = styled.li`
  box-shadow: ${p => p.theme.shadows.shadow};
  border-radius: ${p => p.theme.radii.normal};
  max-width: 300px;
  transition: box-shadow, scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    box-shadow: 10px 7px 13px -6px rgba(15, 35, 241, 0.75);
    scale: 1.05;
  }
`;

export const MovieTitle = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
`;
