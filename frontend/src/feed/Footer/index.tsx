import React, { FC } from 'react';
import Logo from 'assets/Logo.svg';
import Layout from 'components/Layout';

import { socialOptions } from 'utils/social';
import * as S from './style';

const Footer: FC = () => {
  const myMail = 'mariosilvaprada@gmail.com';
  const mailTo = `mailto: ${myMail}`;
  const YEAR = new Date().getFullYear();
  return (
    <Layout title='Contact me'>
      <S.Container>
        <S.StyledText>Get in touch! You can find me at:</S.StyledText>
        <S.MailText href={mailTo}>{myMail}</S.MailText>
        <S.StyledText>OR</S.StyledText>
        <S.SocialWrapper>
          {socialOptions.map(({ Icon, link, color }) => (
            <S.IconWrapper key={link} href={link} color={color} target='blank'>
              <Icon />
            </S.IconWrapper>
          ))}
        </S.SocialWrapper>
        <S.FooterContainer>
          <S.StyledLogo src={Logo} />
          <S.Name>Mário Prada</S.Name>
          <S.SmallText>Copyright ©{YEAR}</S.SmallText>
        </S.FooterContainer>
      </S.Container>
    </Layout>
  );
};

export default Footer;
