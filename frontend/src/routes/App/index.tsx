import React, { FC } from 'react';
import * as S from './style';

import Profile from 'assets/pic.png';
import Button from 'components/Button';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
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
      <Button>Check my work</Button>
    </S.GreetingsWrapper>

    <S.SocialWrapper>
      <S.StyledIcon href='https://github.com/mariosilvaprada' target='blank'>
        <FaGithub />
      </S.StyledIcon>
      <S.StyledIcon
        href='https://www.linkedin.com/in/mariosilvaprada/'
        target='blank'
      >
        <FaLinkedinIn />
      </S.StyledIcon>
      <S.StyledIcon href='https://twitter.com/MarioSilvaPrada' target='blank'>
        <FaTwitter />
      </S.StyledIcon>
    </S.SocialWrapper>
  </S.Container>
);

export default App;
