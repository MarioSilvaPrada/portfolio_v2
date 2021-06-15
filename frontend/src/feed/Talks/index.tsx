import React, { FC } from 'react';
import Title from 'components/Title';
import { BiLinkAlt } from 'react-icons/bi';

import * as S from './style';

interface Props {}

const Talks: FC<Props> = () => {
  const data = [
    {
      title: 'Introduction to React',
      company: 'Portugal Coding',
      date: 'July 2019',
      link: 'https://www.meetup.com/pt-BR/CODING-PORTUGAL/events/262775858/',
    },
    {
      title: 'Other to React',
      company: 'Portugal Coding',
      date: 'July 2019',
      link: 'https://www.meetup.com/pt-BR/CODING-PORTUGAL/events/262775858/',
    },
    {
      title: ' React',
      company: 'Portugal Coding',
      date: 'July 2019',
      link: 'https://www.meetup.com/pt-BR/CODING-PORTUGAL/events/262775858/',
    },
  ];
  return (
    <S.Container>
      <Title>Talks</Title>
      <S.TalksWrapper>
        {data.map(({
          title, date, company, link,
        }, i) => (
          <S.Row>
            <S.StyledDate>{date}</S.StyledDate>
            <S.GitWrapper>
              <S.GitBullet />
              {data.length !== i + 1 && <S.GitLine />}
            </S.GitWrapper>
            <S.IconWrapper href={link} target="blank">
              <BiLinkAlt />
            </S.IconWrapper>
            <S.Column>
              <S.Text>{title}</S.Text>
              <S.Company>{company}</S.Company>
            </S.Column>
          </S.Row>
        ))}
      </S.TalksWrapper>
    </S.Container>
  );
};

export default Talks;
