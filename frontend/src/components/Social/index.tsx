import React, { FC } from 'react';
import * as S from './style';

import { socialOptions } from 'utils/social';

const Button: FC = () => {
  return (
    <S.SocialWrapper>
      {socialOptions.map(({ Icon, link }) => (
        <S.StyledIcon key={link} href={link} target='blank'>
          <Icon />
        </S.StyledIcon>
      ))}
    </S.SocialWrapper>
  );
};

export default Button;
