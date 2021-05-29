import React, { FC, useState, useEffect } from 'react';
import * as S from './style';
import { useInView } from 'react-intersection-observer';

import Button from 'components/Button';
import Social from 'components/Social';

const Main: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <S.Container ref={ref} isVisible={isVisible}>
      <S.ImageWrapper>
        <S.ProfilePic
          src={'https://images-portfolio-v2.s3.eu-west-2.amazonaws.com/pic.png'}
        />
      </S.ImageWrapper>

      <S.GreetingsWrapper>
        <S.Text>Hello, I am</S.Text>
        <S.MainText>
          Mário <br /> Prada
        </S.MainText>
        <S.JobTitle>Software Developer</S.JobTitle>
        <Button>Check my work</Button>
      </S.GreetingsWrapper>
      <Social />
    </S.Container>
  );
};

export default Main;
