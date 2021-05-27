import styled from 'styled-components';

export const Square = styled.div`
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8rem;
  margin-bottom: 1rem;
`;

export const MainSquare = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  max-width: 24rem;
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CatWrapper = styled.div`
  height: 100%;
`;

export const CatTitle = styled.h1`
  color: white;
  text-align: center;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 2.8rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 10rem;
  justify-content: center;
  margin-bottom: 2rem;
`;
