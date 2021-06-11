import React, { FC, useEffect } from 'react';
import {
  Services, Portfolio, Main, Technologies, Footer,
} from 'feed';
import { getProjects } from 'api/projects';
import * as S from './style';

const App: FC = () => {
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <S.StyledBody>
      <Main />
      <Services />
      <Portfolio />
      <Technologies />
      <Footer />
    </S.StyledBody>
  );
};

export default App;
