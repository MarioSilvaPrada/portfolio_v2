import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: white;
  margin-bottom: 1rem;
`;

export const MailText = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;

  a:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const IconWrapper = styled.a`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  cursor: pointer;
  transition: 0.5s;

  &: hover {
    color: ${({ color }) => color};
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 4rem;
  margin-bottom: 0.4rem;
`;

export const Name = styled.h1`
  color: white;
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.S};
  color: white;
  text-transform: uppercase;
`;
