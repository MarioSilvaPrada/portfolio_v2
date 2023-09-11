import React, { FC, useCallback } from 'react';
import Layout from 'components/Layout';
import { IProjects, ProjectType } from 'utils/interface';
import * as S from './style';

interface Props {
  projects: Array<IProjects>;
}

const Portfolio: FC<Props> = ({ projects }) => {
  const getLink = useCallback((item: IProjects) => {
    if (item.link) {
      return (
        <a href={item.link} target="blank">
          {item.link}
        </a>
      );
    }
    if (!item.link && item.image) {
      return (
        <a href={item.image} target="blank">
          Demo
        </a>
      );
    }
    return null;
  }, []);
  return (
    <Layout title="Portfolio" id="portfolio">
      <S.Container>
        <S.Table>
          <thead>
            <th>Platform</th>
            <th>Name</th>
            <th>Description</th>
            <th>Project type</th>
            <th>Url</th>
            <th>Year started</th>
          </thead>
          <tbody>
            {projects.map((item) => (
              <tr>
                <td>{item.type === 'mobile' ? '📱' : '💻'}</td>
                <td>{item.title}</td>
                <td className="description-column">{item.description}</td>
                <td>
                  <ProjectLabel type={item.project_type} />
                </td>
                <td>{getLink(item)}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </Layout>
  );
};

export default Portfolio;

const ProjectLabel = ({ type }: { type: ProjectType }) => {
  const getText = () => {
    if (type === 'employment') return { text: 'Employment', color: '#EBEF95' };
    if (type === 'side_project') return { text: 'Side project', color: '#EFD595' };
    return { text: 'Freelance', color: '#8DDFCB' };
  };

  const { color, text } = getText();
  return (
    <S.LabelContainer color={color}>
      <p>{text}</p>
    </S.LabelContainer>
  );
};
