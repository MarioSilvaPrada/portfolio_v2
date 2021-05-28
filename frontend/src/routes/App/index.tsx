import React, { FC } from 'react';
import * as S from './style';

import Main from 'components/Main';
import Services from 'components/Services';

const App: FC = () => (
  <S.StyledBody>
    <Main />
    <Services />
  </S.StyledBody>
);

export default App;
