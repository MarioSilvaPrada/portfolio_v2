import React, { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Paragraph from 'components/Paragraph';
import Layout from 'components/Layout';

import { content } from 'content';

import ReactLogo from 'assets/images/technologies/react_logo.png';
import ReduxLogo from 'assets/images/technologies/redux_logo.png';
import TSLogo from 'assets/images/technologies/ts_logo.png';
import RestLogo from 'assets/images/technologies/rest_logo.png';
import DjangoLogo from 'assets/images/technologies/django_logo.png';
import * as S from './style';

const Technologies: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const getRandomTime = () => {
    const max = 1;
    const min = 0;
    const rndInt = Math.random() * (max - min + 1) + min;

    return `${rndInt}s`;
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <Layout title="Technologies" id="technologies">
      <S.Container ref={ref} isVisible={isVisible}>
        <Paragraph>{content.technologies}</Paragraph>
        <S.ToolsWrapper>
          <S.Circle>
            <S.CircleTitle>Frontend</S.CircleTitle>

            <S.LogoContainer
              src={TSLogo}
              style={{
                top: '5rem',
                left: '16rem',
                animationDelay: getRandomTime(),
              }}
            />
            <S.LogoContainer
              src={ReduxLogo}
              style={{
                bottom: '6rem',
                left: '16rem',
                animationDelay: getRandomTime(),
              }}
            />
            <S.LogoContainer
              src={ReactLogo}
              style={{
                top: '17rem',
                left: '2rem',
                animationDelay: getRandomTime(),
              }}
            />
          </S.Circle>
          <S.Circle right>
            <S.CircleTitle>Backend</S.CircleTitle>
            <S.LogoContainer
              src={DjangoLogo}
              style={{
                top: '7rem',
                right: '8rem',
                animationDelay: getRandomTime(),
              }}
            />
            <S.LogoContainer
              src={RestLogo}
              style={{
                bottom: '7rem',
                right: '10rem',
                animationDelay: getRandomTime(),
              }}
              background="white"
            />
          </S.Circle>
        </S.ToolsWrapper>
      </S.Container>
    </Layout>
  );
};

export default Technologies;
