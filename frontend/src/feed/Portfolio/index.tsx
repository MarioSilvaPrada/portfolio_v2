import React, { FC } from 'react';
import Card from 'components/Card';
import Layout from 'components/Layout';
import * as S from './style';
import { IProjects } from 'utils/interface';

interface Props {
  projects: Array<IProjects>;
}

const Portfolio: FC<Props> = ({ projects }) => (
  <Layout title='Portfolio' id='portfolio'>
    <S.Container>
      {projects.map(({ title, image, type, description, link }, i) => (
        <Card
          key={title}
          title={title}
          imageUrl={image}
          type={type}
          description={description}
          link={link}
          isEven={i % 2 === 0}
          isLastItem={i + 1 === projects.length}
        />
      ))}
    </S.Container>
  </Layout>
);

export default Portfolio;
