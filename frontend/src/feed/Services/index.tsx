import React from 'react';
import Paragraph from 'components/Paragraph';
import Layout from 'components/Layout';
import { content } from 'content';

import { FaCodeBranch } from 'react-icons/fa';
import { MdColorLens, MdLaptopMac, MdPhoneIphone } from 'react-icons/md';
import * as S from './style';

const Services = () => {
  const servicesOptions = ['Clean', 'Readable', 'Maintainable', 'Responsive'];
  const designOptions = ['Eye for detail', 'UX & UI', 'Design patterns'];
  return (
    <>
      <Layout title='Services' id='services'>
        <S.Container>
          <Paragraph>{content.services}</Paragraph>
          <S.Wrapper>
            <S.CatWrapper>
              <S.Square>
                <FaCodeBranch />
              </S.Square>
              <S.CatTitle>Code</S.CatTitle>
              <S.ListWrapper>
                {servicesOptions.map((text) => (
                  <S.Option key={text}>
                    <S.Check />
                    <S.OptionText>{text}</S.OptionText>
                  </S.Option>
                ))}
              </S.ListWrapper>
            </S.CatWrapper>
            <S.ChainIcon />
            <S.CatWrapper>
              <S.MainSquare>
                <S.IconsWrapper>
                  <MdPhoneIphone style={{ marginBottom: '5rem' }} />
                  <MdLaptopMac style={{ marginTop: '5rem' }} />
                </S.IconsWrapper>
                <S.StyledText>Mobile & Web Development</S.StyledText>
              </S.MainSquare>
            </S.CatWrapper>
            <S.ChainIcon />
            <S.CatWrapper>
              <S.Square>
                <MdColorLens />
              </S.Square>
              <S.CatTitle>Design</S.CatTitle>
              <S.ListWrapper>
                {designOptions.map((text) => (
                  <S.Option key={text}>
                    <S.Check />
                    <S.OptionText>{text}</S.OptionText>
                  </S.Option>
                ))}
              </S.ListWrapper>
            </S.CatWrapper>
          </S.Wrapper>
        </S.Container>
      </Layout>
    </>
  );
};

export default Services;
