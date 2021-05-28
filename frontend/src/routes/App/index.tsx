import React, { FC } from 'react';
import * as S from './style';

import { Services, Portfolio, Main, Technologies, Footer } from 'feed';

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
