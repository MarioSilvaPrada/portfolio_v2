import React from 'react';
import * as S from './style';

import Logo from 'assets/Logo.svg';

const NavBar = () => {
  const menuOptions = [
    {
      text: 'Services',
      to: '/',
    },
    {
      text: 'Technologies',
      to: '/',
    },
    {
      text: 'Portfolio',
      to: '/',
    },
    {
      text: 'Contacts',
      to: '/',
    },
  ];
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.LinkWrapper>
        {menuOptions.map(({ text, to }) => (
          <S.StyledLink key={text} to={to}>
            {text}
          </S.StyledLink>
        ))}
      </S.LinkWrapper>
    </S.Container>
  );
};

export default NavBar;
