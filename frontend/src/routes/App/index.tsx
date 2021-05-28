import React, { FC } from 'react';
import * as S from './style';

import Main from 'components/Main';
import { Services, Portfolio } from 'feed';

const App: FC = () => (
  <S.StyledBody>
    <Main />
    <Services />
    <Portfolio />
  </S.StyledBody>
);

export default App;
