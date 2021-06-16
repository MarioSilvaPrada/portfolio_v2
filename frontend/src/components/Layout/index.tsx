import React, { FC } from 'react';
import Title from 'components/Title';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 5rem auto 0;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Layout;
