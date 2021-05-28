import React, { useState, useEffect } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      const positionTop = document.documentElement.getBoundingClientRect().top;

      if (positionTop < -30) {
        setIsScrolled(true);
        console.log(true);
      } else {
        setIsScrolled(false);
        console.log(false);
      }
      // console.log('doc', document.documentElement.getBoundingClientRect().top);
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
