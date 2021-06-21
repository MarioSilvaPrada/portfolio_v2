import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

type Props = {
  isScrolled: boolean;
};

type IFixedNavigation = {
  isOpen?: boolean;
};

export const Container = styled.div<Props>`
  padding: 1rem ${({ theme }) => theme.dimensions.marginPage};
  background: ${({ isScrolled }) =>
    isScrolled ? 'rgba(0,0,0,0.8)' : 'transparent'};
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: 0.7s;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.S}) {
    justify-content: space-between;
  }
`;

export const StyledLink = styled.a`
  margin-right: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.M};
  color: white;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.S}) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  color: white;
  font-size: 3rem;
  display: none;
  z-index: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.S}) {
    display: block;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  color: white;
  font-size: 3rem;
  display: none;
  z-index: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.S}) {
    display: block;
  }
`;

export const FixedNavigation = styled.div<IFixedNavigation>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  border-left: 0.2rem solid white;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const StyledNav = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: white;
  margin-bottom: 2.5rem;
`;
