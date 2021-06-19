import styled from 'styled-components';

type Props = {
  isScrolled: boolean;
};

export const Container = styled.div < Props > `
  padding: 1rem ${({ theme }) => theme.dimensions.marginPage};
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(0,0,0,0.8)' : 'transparent')};
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: 0.7s;
`;

export const StyledLink = styled.a`
  margin-right: 2rem;
  font-size: 1.2rem;
  color: white;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 3.5rem;
`;
