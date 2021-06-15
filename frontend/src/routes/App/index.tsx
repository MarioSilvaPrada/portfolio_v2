import React, { FC, useEffect, useState } from 'react';
import {
  Services, Portfolio, Main, Technologies, Talks, Footer,
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

    console.log({ res });

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
      <Talks />
      <Footer />
    </S.StyledBody>
  );
};

export default App;
