import React from 'react';
import * as S from './style';

import Title from 'components/Title';
import Card from 'components/Card';

const Portfolio = () => {
  const data = [
    {
      title: 'Bitcouple',
      imageUrl:
        'https://cdn.dribbble.com/users/4452838/screenshots/10479990/media/749e8352601ba9a210812a8e89bd5425.png?compress=1&resize=1600x1200',
      type: 'mobile',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ultricies eros. Maecenas dolor metus, fringilla id sem non, consectetur posuere ipsum. Donec vitae nisi tincidunt, auctor magna at, vehicula nunc. Proin ornare tristique semper. Maecenas id ipsum a tellus euismod accumsan. Sed nisl sapien, scelerisque sed eleifend quis, vestibulum quis lectus. Nam lacus neque, varius ut ornare in, volutpat non erat. Praesent pellentesque leo eget cursus eleifend. In magna nunc, pellentesque eu pretium id, consequat sit amet quam. Maecenas urna turpis, ornare at pellentesque tincidunt, viverra non nibh. Nulla accumsan tellus ac eros pellentesque tempus.',
    },
    {
      title: 'Bitcouple1',
      imageUrl:
        'https://cdn.dribbble.com/users/4452838/screenshots/10479990/media/749e8352601ba9a210812a8e89bd5425.png?compress=1&resize=1600x1200',
      type: 'web',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ultricies eros. Maecenas dolor metus, fringilla id sem non, consectetur posuere ipsum. Donec vitae nisi tincidunt, auctor magna at, vehicula nunc. Proin ornare tristique semper. Maecenas id ipsum a tellus euismod accumsan. Sed nisl sapien, scelerisque sed eleifend quis, vestibulum quis lectus. Nam lacus neque, varius ut ornare in, volutpat non erat. Praesent pellentesque leo eget cursus eleifend. In magna nunc, pellentesque eu pretium id, consequat sit amet quam. Maecenas urna turpis, ornare at pellentesque tincidunt, viverra non nibh. Nulla accumsan tellus ac eros pellentesque tempus.',
    },
    {
      title: 'Bitcouple2',
      imageUrl:
        'https://cdn.dribbble.com/users/4452838/screenshots/10479990/media/749e8352601ba9a210812a8e89bd5425.png?compress=1&resize=1600x1200',
      type: 'mobile',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ultricies eros. Maecenas dolor metus, fringilla id sem non, consectetur posuere ipsum. Donec vitae nisi tincidunt, auctor magna at, vehicula nunc. Proin ornare tristique semper. Maecenas id ipsum a tellus euismod accumsan. Sed nisl sapien, scelerisque sed eleifend quis, vestibulum quis lectus. Nam lacus neque, varius ut ornare in, volutpat non erat. Praesent pellentesque leo eget cursus eleifend. In magna nunc, pellentesque eu pretium id, consequat sit amet quam. Maecenas urna turpis, ornare at pellentesque tincidunt, viverra non nibh. Nulla accumsan tellus ac eros pellentesque tempus.',
    },
    {
      title: 'Bitcouple3',
      imageUrl:
        'https://cdn.dribbble.com/users/4452838/screenshots/10479990/media/749e8352601ba9a210812a8e89bd5425.png?compress=1&resize=1600x1200',
      type: 'web',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ultricies eros. Maecenas dolor metus, fringilla id sem non, consectetur posuere ipsum. Donec vitae nisi tincidunt, auctor magna at, vehicula nunc. Proin ornare tristique semper. Maecenas id ipsum a tellus euismod accumsan. Sed nisl sapien, scelerisque sed eleifend quis, vestibulum quis lectus. Nam lacus neque, varius ut ornare in, volutpat non erat. Praesent pellentesque leo eget cursus eleifend. In magna nunc, pellentesque eu pretium id, consequat sit amet quam. Maecenas urna turpis, ornare at pellentesque tincidunt, viverra non nibh. Nulla accumsan tellus ac eros pellentesque tempus.',
    },
  ];
  return (
    <>
      <Title>Portfolio</Title>
      <S.Container>
        {data.map(({ title, imageUrl, type, description }, i) => (
          <Card
            key={title}
            title={title}
            imageUrl={imageUrl}
            type={type}
            description={description}
            isEven={i % 2 == 0}
          />
        ))}
      </S.Container>
    </>
  );
};

export default Portfolio;
