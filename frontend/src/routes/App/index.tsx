import React, { FC } from 'react';
import * as S from './style';

import Profile from 'assets/pic.png';

const App: FC = () => (
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
    </S.GreetingsWrapper>
  </S.Container>
);

export default App;
