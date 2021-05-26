import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${({ theme }) => theme.dimensions.marginPage};
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  margin-right: 2rem;
  color: white;
`;

export const LinkWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img``;
