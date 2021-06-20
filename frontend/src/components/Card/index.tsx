import React, { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { MdLaptopMac, MdPhoneIphone } from 'react-icons/md';
import { BiLinkAlt } from 'react-icons/bi';

import * as S from './style';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
  isEven: boolean;
  link?: string;
  isLastItem?: boolean;
}

const Card: FC<Props> = ({
  title,
  description,
  imageUrl,
  type,
  isEven,
  link,
  isLastItem,
}) => {
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

  const goToUrl = (url: string) => {
    if (window.innerWidth < 1080) {
      window.open(url);
    }
  };
  return (
    <S.Wrapper
      isEven={isEven}
      ref={ref}
      isVisible={isVisible}
      isImageScaled={isImageScaled}
      isLastItem={isLastItem}
    >
      <S.LeftSide>
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          <S.IconContainer>
            {type === 'Mobile' ? <MdPhoneIphone /> : <MdLaptopMac />}
          </S.IconContainer>
          {link && (
            <S.UrlLink href={link} target='blank'>
              <BiLinkAlt />
            </S.UrlLink>
          )}
        </S.TitleWrap>
        <S.Paragraph>{description}</S.Paragraph>
      </S.LeftSide>

      <S.ImageWrapper isImageScaled={isImageScaled}>
        {isImageScaled && (
          <S.CloseBtn onClick={() => setIsImageScaled(false)}>
            <S.CloseIcon />
          </S.CloseBtn>
        )}

        <S.StyledImage src={imageUrl} onClick={() => goToUrl(imageUrl)} />

        {!isImageScaled && (
          <S.ZoomLayer
            isImageScaled={isImageScaled}
            onClick={() => setIsImageScaled(true)}
          >
            <S.SearchIcon />
          </S.ZoomLayer>
        )}
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Card;
