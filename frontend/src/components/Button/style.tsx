import styled from 'styled-components';

export const Link = styled.a``;

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.main};
  border: 2px solid ${({ theme }) => theme.colors.main};
  padding: 1rem 1.8rem;
  font-family: GilroyBold;
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: white;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p``;
