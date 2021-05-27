import React, { FC } from 'react';
import * as S from './style';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Button: FC = () => {
  const socialOptions = [
    {
      Icon: FaGithub,
      link: 'https://github.com/mariosilvaprada',
    },
    {
      Icon: FaLinkedinIn,
      link: 'https://www.linkedin.com/in/mariosilvaprada/',
    },
    {
      Icon: FaTwitter,
      link: 'https://twitter.com/MarioSilvaPrada',
    },
  ];
  return (
    <S.SocialWrapper>
      {socialOptions.map(({ Icon, link }) => (
        <S.StyledIcon href={link} target='blank'>
          <Icon />
        </S.StyledIcon>
      ))}
    </S.SocialWrapper>
  );
};

export default Button;
