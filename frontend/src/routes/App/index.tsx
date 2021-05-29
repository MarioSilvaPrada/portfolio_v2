import React, { FC } from 'react';
import {
  Services, Portfolio, Main, Technologies, Footer,
} from 'feed';
import * as S from './style';

const App: FC = () => (
  <S.StyledBody>
    <Main />
    <Services />
    <Portfolio />
    <Technologies />
    <Footer />
  </S.StyledBody>
);

export default App;
