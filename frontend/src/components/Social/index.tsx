import React, { FC } from 'react';
import { socialOptions } from 'utils/social';
import * as S from './style';

const Button: FC = () => (
  <S.SocialWrapper>
    {socialOptions.map(({ Icon, link, color }) => (
      <S.StyledIcon key={link} href={link} color={color} target="blank">
        <Icon />
      </S.StyledIcon>
    ))}
  </S.SocialWrapper>
);

export default Button;
