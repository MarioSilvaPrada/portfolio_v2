import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${({ theme }) => theme.dimensions.marginPage};

  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: 1s;
`;

export const StyledLink = styled(Link)`
  margin-right: 2rem;
  color: white;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img`
  position: absolute;
`;
