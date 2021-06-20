import React, { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LazyImage } from 'react-lazy-images';

import Button from 'components/Button';
import Social from 'components/Social';
import * as S from './style';

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
        <LazyImage
          alt="Main Picture"
          placeholder={({ ref: placeRef }) => (
            <div ref={placeRef}>
              <h1>Loading..</h1>
            </div>
          )}
          src="https://images-portfolio-v2.s3.eu-west-2.amazonaws.com/pic.png"
          actual={({ imageProps }) => <S.ProfilePic {...imageProps} />}
        />
      </S.ImageWrapper>

      <S.GreetingsWrapper>
        <div>
          <S.Text>Hello, I am</S.Text>
          <S.MainText>
            Mário
            {' '}
            <br />
            {' '}
            Prada
          </S.MainText>
          <S.JobTitle>Software Developer</S.JobTitle>
        </div>
        <Button href="#portfolio">Check my work</Button>
      </S.GreetingsWrapper>
      <Social />
    </S.Container>
  );
};

export default Main;
