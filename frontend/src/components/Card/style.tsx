import styled, { keyframes } from 'styled-components';

type Props = {
  imageUrl?: string;
  isEven?: boolean;
  isVisible?: boolean;
  isImageScaled?: boolean;
  index?: number;
};

const DISTANCE = '80rem';

const swipeIn = (isEven: boolean) => keyframes`
    0% {
        transform: translateX(${isEven ? DISTANCE : `-${DISTANCE}`});
    }
    100% {
        transform: translateX(0);
    }
`;

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div<Props>`
  background: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${({ isEven }) => (isEven ? '10rem' : 0)};
  margin-left: ${({ isEven }) => (isEven ? 0 : '10rem')};
  opacity: 0;
  animation: 1s ${({ isVisible, isEven }) => isVisible && swipeIn(isEven)}
      ease-in,
    1.5s ${({ isVisible }) => isVisible && opacityIn} linear forwards;
  position: relative;
  z-index: ${({ isImageScaled }) => (isImageScaled ? 1 : 0)};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.M};
  line-height: 1.8rem;
`;
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
export const Title = styled.h1`
  margin-right: 1rem;
`;

export const StyledImage = styled.img<Props>`
  width: 28rem;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  background-color: white;
  cursor: pointer;
  transform: ${({ isImageScaled }) =>
    isImageScaled ? 'scale(2.5) translateX(-25%)' : 'scale(1) translateX(0)'};
  transition: 0.5s;
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.main};
`;
