import React, { FC } from 'react';
import * as S from './style';

interface Props {
  children: string;
}

const Button: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Button;
