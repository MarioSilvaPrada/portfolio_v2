import styled from 'styled-components';

export const Container = styled.div``;

export const GitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  margin-left: 0.5rem;
`;

export const GitBullet = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 0.37rem solid ${({ theme }) => theme.colors.main};
`;

export const GitLine = styled.div`
  width: 0.3rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.main};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    height: 7rem;
  }
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  margin-left: 15rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.XL}) {
    margin-left: 4rem;
  }
`;

export const TalksWrapper = styled.div``;

export const StyledDate = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.S};
  transform: rotate(-10deg);
  position: absolute;
  left: -4rem;
  top: 0.5rem;
`;

export const Text = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.L};
  margin-top: -5px;
`;

export const Company = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.M};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: ${({ theme }) => theme.colors.main};
  margin-right: 0.8rem;
  cursor: pointer;
`;
