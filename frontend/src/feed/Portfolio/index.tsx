import React, { FC } from 'react';
import Card from 'components/Card';
import Layout from 'components/Layout';
import { IProjects } from 'utils/interface';
import * as S from './style';

interface Props {
  projects: Array<IProjects>;
}

const Portfolio: FC<Props> = ({ projects }) => (
  <Layout title="Portfolio" id="portfolio">
    <S.Container>
      {projects.length > 0 ? (
        projects.map(({
          title, image, type, description, link,
        }, i) => (
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
        ))
      ) : (
        <h1 style={{ textAlign: 'center', color: '#F05945', fontSize: '3rem' }}>
          (Under construction)
        </h1>
      )}
    </S.Container>
  </Layout>
);

export default Portfolio;
