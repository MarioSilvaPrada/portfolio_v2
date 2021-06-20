import styled, { keyframes, css } from 'styled-components';

type Props = {
  isVisible?: boolean;
  right?: boolean;
  background?: string;
};

const CIRCLE_SIZE = '43rem';

const CIRCLE_SIZE_S = '28rem';

const LogoAnim = keyframes`
    0% {
        transform: translateY(-.5rem);
    }
    100% {
      transform: translateY(.5rem);
    }
`;

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 2s ${({ isVisible }) => isVisible && opacityAnim} ease-out;
`;

export const ToolsWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  height: ${CIRCLE_SIZE};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    width: ${CIRCLE_SIZE_S};
    height: calc(${CIRCLE_SIZE_S} * 2);
    margin: 2rem auto 0;
  }
`;

export const Circle = styled.div<Props>`
  display: flex;
  justify-content: center;
  position: absolute;
  width: ${CIRCLE_SIZE};
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: 5px solid ${({ theme }) => theme.colors.main};
  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    height: 50%;
    width: 100%;
    ${({ right }) =>
      right &&
      css`
        bottom: 5rem;
      `};
  }
`;

export const LogoContainer = styled.img<Props>`
  background-color: ${({ background }) => background || 'transparent'};
  height: 10rem;
  position: absolute;
  animation: 1s ${LogoAnim} infinite linear alternate;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    height: 5rem;
  }
`;

export const CircleTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  width: 50%;
  text-align: center;
  margin-top: -5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    position: absolute;
    left: -10rem;
    top: 60%;
    transform: rotate(-90deg);
  }
`;
