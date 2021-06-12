import React, { FC, useEffect, useState } from 'react';
import {
  Services, Portfolio, Main, Technologies, Footer,
} from 'feed';
import { getProjects } from 'api/projects';
import * as S from './style';

type Projects = {
  description: string;
  id: number;
  image: string;
  title: string;
  type: string;
};

const App: FC = () => {
  const [projects, setProjects] = useState<Array<Projects>>([]);

  const getMyProjects = async () => {
    const res = await getProjects();

    if (res.status === 200) {
      setProjects(res.data);
    }
  };
  useEffect(() => {
    getMyProjects();
  }, []);

  return (
    <S.StyledBody>
      <Main />
      <Services />
      <Portfolio projects={projects} />
      <Technologies />
      <Footer />
    </S.StyledBody>
  );
};

export default App;
