import React, { FC } from 'react';
import * as S from './style';
import Title from 'components/Title';
import Logo from 'assets/Logo.svg';

import { socialOptions } from 'utils/social';

const Footer: FC = () => {
  const myMail = 'mariosilvaprada@gmail.com';
  const mailTo = `mailto: ${myMail}`;
  const YEAR = new Date().getFullYear();
  return (
    <>
      <S.Container>
        <Title>Contact me</Title>
        <S.StyledText>Get in touch! You can find me at:</S.StyledText>
        <S.MailText href={mailTo}>{myMail}</S.MailText>
        <S.StyledText>OR</S.StyledText>
        <S.SocialWrapper>
          {socialOptions.map(({ Icon, link }) => (
            <S.IconWrapper key={link} href={link} target='blank'>
              <Icon />
            </S.IconWrapper>
          ))}
        </S.SocialWrapper>
        <S.FooterContainer>
          <S.StyledLogo src={Logo} />
          <S.Name>Mário Prada</S.Name>
          <S.SmallText>Copyright © {YEAR}</S.SmallText>
        </S.FooterContainer>
      </S.Container>
    </>
  );
};

export default Footer;
