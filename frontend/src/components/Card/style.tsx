import styled, { keyframes } from 'styled-components';

type Props = {
  imageUrl?: string;
  isEven?: boolean;
  isVisible?: boolean;
};

const swipeIn = (isEven: boolean) => keyframes`
    0% {
        opacity: 0;
        transform: translateX(${isEven ? '100%' : '-100%'});
    }
    100% {
        transform: translateX(0);
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
  margin-bottom: 2rem;
  transform: translateX(${({ isEven }) => (isEven ? '100%' : '-100%')});
  animation: 0.9s ${({ isVisible, isEven }) => isVisible && swipeIn(isEven)}
    ease-in forwards;
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

export const StyledImage = styled.div<Props>`
  width: 26rem;
  height: 23rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.main};
`;
