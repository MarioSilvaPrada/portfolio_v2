import styled, { keyframes } from 'styled-components';

type Props = {
  isVisible: boolean;
};

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div < Props > `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: 2s ${({ isVisible }) => isVisible && opacityAnim} ease-out;
  max-width: 105rem;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: red;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: -10rem;
  bottom: 0;
`;

export const ProfilePic = styled.img`
  width: 55rem;
  animation: 2s ${opacityAnim} ease-out;

  @media screen and (max-width: 57rem) {
    width: 100%;
  }
`;

export const GreetingsWrapper = styled.div`
  z-index: 10;
`;

export const Text = styled.h1`
  color: white;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
  font-size: 4rem;
`;

export const MainText = styled.h1`
  color: white;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
  font-size: 8.4rem;
  line-height: 8rem;
`;

export const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 3rem;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 4.7rem;
`;
