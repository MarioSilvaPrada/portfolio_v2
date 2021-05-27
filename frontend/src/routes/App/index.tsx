import React, { FC } from 'react';
import * as S from './style';

import Profile from 'assets/pic.png';
import Button from 'components/Button';
import Social from 'components/Social';
import Services from 'components/Services';

const App: FC = () => (
  <S.StyledBody>
    <S.Container>
      <S.ImageWrapper>
        <S.ProfilePic src={Profile} />
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
    <Services />
  </S.StyledBody>
);

export default App;
