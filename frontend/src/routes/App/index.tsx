import React, { FC, useEffect, useState } from 'react';
import {
  Services, Portfolio, Main, Technologies, Talks, Footer,
} from 'feed';
import Spinner from 'components/Spinner';
import { getProjects } from 'api/projects';
import { getTalks } from 'api/talks';
import { ITalks, IProjects } from 'utils/interface';
import * as S from './style';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [talks, setTalks] = useState<Array<ITalks>>([]);

  const getMyProjects = async () => {
    const res = await getProjects();

    if (res.status === 200) {
      setProjects(res.data);
    }
  };
  const getMyTalks = async () => {
    const res = await getTalks();

    if (res.status === 200) {
      setTalks(res.data);
    }
  };

  const getAllData = async () => {
    await getMyProjects();
    await getMyTalks();
    setIsLoading(false);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <S.StyledBody>
      <Main />
      <Services />
      <Portfolio projects={projects} />
      <Technologies />
      <Talks talks={talks} />
      <Footer />
    </S.StyledBody>
  );
};

export default App;
