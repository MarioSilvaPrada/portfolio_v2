import React from 'react';
import * as S from './style';
import Title from 'components/Title';

import { FaCodeBranch } from 'react-icons/fa';
import { MdColorLens, MdLaptopMac, MdPhoneIphone } from 'react-icons/md';

const Services = () => {
  return (
    <>
      <Title>Services</Title>
      <S.Wrapper>
        <S.CatWrapper>
          <S.Square>
            <FaCodeBranch />
          </S.Square>
          <S.CatTitle>Code</S.CatTitle>
        </S.CatWrapper>
        <S.CatWrapper>
          <S.MainSquare>
            <S.IconsWrapper>
              <MdPhoneIphone style={{ marginBottom: '5rem' }} />
              <MdLaptopMac style={{ marginTop: '5rem' }} />
            </S.IconsWrapper>
            <S.StyledText>Mobile & Web Development</S.StyledText>
          </S.MainSquare>
        </S.CatWrapper>
        <S.CatWrapper>
          <S.Square>
            <MdColorLens />
          </S.Square>
          <S.CatTitle>Design</S.CatTitle>
        </S.CatWrapper>
      </S.Wrapper>
    </>
  );
};

export default Services;
