import styled, { keyframes, css } from 'styled-components';

type Props = {
  isVisible?: boolean;
  right?: boolean;
  background?: string;
};

const CIRCLE_SIZE = '47rem';

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
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const ToolsWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  height: ${CIRCLE_SIZE};
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
`;

export const LogoContainer = styled.img<Props>`
  background-color: ${({ background }) => background || 'transparent'};
  height: 10rem;
  position: absolute;
  animation: 1s ${LogoAnim} infinite linear alternate;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
`;

export const CircleTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  width: 50%;
  text-align: center;
  margin-top: -5rem;
`;
