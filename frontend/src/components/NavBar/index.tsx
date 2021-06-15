import React, { useState, useEffect } from 'react';
import Logo from 'assets/Logo.svg';
import * as S from './style';

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
      text: 'Talks',
      to: '/',
    },
    {
      text: 'Contacts',
      to: '/',
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const getIsScrolled = () => {
    const positionTop = document.documentElement.getBoundingClientRect().top;
    const triggerPosition = -30;

    if (positionTop < triggerPosition) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      getIsScrolled();
    });
  }, []);

  return (
    <S.Container isScrolled={isScrolled}>
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
