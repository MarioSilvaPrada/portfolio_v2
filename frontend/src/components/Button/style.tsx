import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.main};
  border: none;
  padding: 1.2rem 2rem;
  font-family: GilroyBold;
  font-size: 2rem;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
`;