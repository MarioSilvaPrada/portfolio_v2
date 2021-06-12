import React, { FC } from 'react';

import Title from 'components/Title';
import Card from 'components/Card';
import * as S from './style';

interface Props {
  projects: Array<{
    description: string;
    id: number;
    image: string;
    title: string;
    type: string;
  }>;
}

const Portfolio: FC<Props> = ({ projects }) => {
  return (
    <>
      <Title>Portfolio</Title>
      <S.Container>
        {projects.map(({ title, image, type, description }, i) => (
          <Card
            key={title}
            title={title}
            imageUrl={image}
            type={type}
            description={description}
            isEven={i % 2 === 0}
          />
        ))}
      </S.Container>
    </>
  );
};

export default Portfolio;
