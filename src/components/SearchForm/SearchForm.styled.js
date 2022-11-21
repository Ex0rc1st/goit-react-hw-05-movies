import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 300px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border-width: 1px;
`;

export const Button = styled.button`
  width: 80px;
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[2]}px;
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  border-color: transparent;
  text-transform: uppercase;
  font-weight: 700;

  :hover {
    background-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.white};
  }
`;
