import React, { FC } from 'react';
import * as S from './style';

interface Props {
  children: string;
}

const Title: FC<Props> = ({ children }) => {
  return <S.StyledText>{children}</S.StyledText>;
};

export default Title;
