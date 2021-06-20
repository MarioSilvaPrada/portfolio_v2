import styled, { keyframes } from 'styled-components';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

type Props = {
  isEven?: boolean;
  isVisible?: boolean;
  isImageScaled?: boolean;
  isLastItem?: boolean;
};

const swipeIn = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
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

export const Wrapper = styled.div < Props > `
  background: white;
  padding: 3rem 2rem;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${({ isEven }) => (isEven ? '10rem' : 0)};
  margin-left: ${({ isEven }) => (isEven ? 0 : '10rem')};
  opacity: 0;
  animation: 0.5s ${({ isVisible }) => isVisible && swipeIn} ease-in,
    0.5s ${({ isVisible }) => isVisible && opacityIn} linear forwards;
  position: relative;
  z-index: ${({ isImageScaled }) => (isImageScaled ? 1 : 0)};
  margin-bottom: ${({ isLastItem }) => (isLastItem ? 0 : '3rem')};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const UrlLink = styled.a`
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.M};
  line-height: 1.8rem;
`;
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    justify-content: center;
  }
`;
export const Title = styled.h1`
  margin-right: 1rem;
`;
export const ZoomLayer = styled.div < Props > `
  background: rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  opacity: 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    display: none;
  }
`;

export const ImageWrapper = styled.div < Props > `
  width: 28rem;
  position: relative;
  transform: ${({ isImageScaled }) => (isImageScaled ? 'scale(2.7) translateX(-25%)' : 'scale(1) translateX(0)')};
  transition: 0.5s;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearchPlus)`
  font-size: 3rem;
  color: white;
`;

export const CloseIcon = styled(FaSearchMinus)`
  color: white;
  font-size: 1rem;
`;
export const StyledImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  background-color: white;
`;

export const IconContainer = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main};
  margin-right: 1rem;
`;
