import React, { FC } from 'react';
import * as S from './style';

interface Props {
  children: string;
  href?: string;
}

const Button: FC<Props> = ({ children, href }) => (
  <S.Link href={href}>
    <S.Container>{children}</S.Container>
  </S.Link>
);

export default Button;