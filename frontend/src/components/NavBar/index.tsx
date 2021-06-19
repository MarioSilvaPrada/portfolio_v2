import React, { useState, useEffect } from 'react';
import Logo from 'assets/Logo.svg';
import { sections } from 'utils/sections';
import * as S from './style';

const NavBar = () => {
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
        {sections.map(({ text, to }) => (
          <S.StyledLink key={text} href={`#${to}`}>
            {text}
          </S.StyledLink>
        ))}
      </S.LinkWrapper>
    </S.Container>
  );
};

export default NavBar;
