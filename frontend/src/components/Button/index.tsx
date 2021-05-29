import React, { FC } from 'react';
import * as S from './style';

interface Props {
  children: string;
}

const Button: FC<Props> = ({ children }) => <S.Container>{children}</S.Container>;

export default Button;
