import React, { FC } from 'react';
import Layout from 'components/Layout';

import { BiLinkAlt } from 'react-icons/bi';
import { ITalks } from 'utils/interface';

import * as S from './style';

interface Props {
  talks: Array<ITalks>;
}

const Talks: FC<Props> = ({ talks }) => {
  const getDateString = (date: Date) => {
    const datesArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();

    return `${datesArr[month]} ${year}`;
  };
  return (
    <Layout title="Talks" id="talks">
      <S.Container>
        <S.TalksWrapper>
          {talks
            .sort(
              (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
            )
            .map(({
              title, date, company, link, id,
            }, i) => (
              <S.Row key={id}>
                <S.StyledDate>{getDateString(date)}</S.StyledDate>
                <S.GitWrapper>
                  <S.GitBullet />
                  {talks.length !== i + 1 && <S.GitLine />}
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
    </Layout>
  );
};

export default Talks;
