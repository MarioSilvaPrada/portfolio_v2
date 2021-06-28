import React, { FC, useState, useEffect } from 'react';
import Title from 'components/Title';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

type SProps = {
  isVisible?: boolean;
};

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div < SProps > `
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 5rem auto 0;
  opacity: 0;
  animation: 2s ${({ isVisible }) => isVisible && opacityAnim} ease-out forwards;
`;

interface Props {
  title: string;
  children: React.ReactNode;
  id: string;
  isVisible?: boolean;
}

const Layout: FC<Props> = ({ title, children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Container id={id} isVisible={isVisible} ref={ref}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Layout;
