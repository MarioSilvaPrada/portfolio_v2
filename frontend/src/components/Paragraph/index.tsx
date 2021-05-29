import React, { FC } from 'react';
import * as S from './style';

interface Props {
  children: string;
}

const Paragraph: FC<Props> = ({ children }) => <S.StyledParagraph>{children}</S.StyledParagraph>;

export default Paragraph;
