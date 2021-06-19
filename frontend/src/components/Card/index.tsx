import React, { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { MdLaptopMac, MdPhoneIphone } from 'react-icons/md';
import * as S from './style';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
  isEven: boolean;
  index: number;
}

const Card: FC<Props> = ({ title, description, imageUrl, type, isEven }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [isImageScaled, setIsImageScaled] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <S.Wrapper
      isEven={isEven}
      ref={ref}
      isVisible={isVisible}
      isImageScaled={isImageScaled}
    >
      <S.LeftSide>
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          <S.IconContainer>
            {type === 'Mobile' ? <MdPhoneIphone /> : <MdLaptopMac />}
          </S.IconContainer>
        </S.TitleWrap>
        <S.Paragraph>{description}</S.Paragraph>
      </S.LeftSide>

      <S.ImageWrapper
        isImageScaled={isImageScaled}
        onClick={() => setIsImageScaled(!isImageScaled)}
      >
        <S.StyledImage src={imageUrl} />
        <S.ZoomLayer isImageScaled={isImageScaled} />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Card;
