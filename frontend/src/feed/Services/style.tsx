import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';

export const Square = styled.div`
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
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
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  max-width: 25rem;
`;

export const Container = styled.div`
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto;
`;

export const Wrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CatWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 1.2rem;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 2.8rem;
  text-align: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 10rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const OptionText = styled.p`
  color: white;
  font-size: 1.8rem;
`;

export const Check = styled(FaCheck)`
  color: ${({ theme }) => theme.colors.main};
  font-size: 1.8rem;
  margin-right: 0.7rem;
`;

export const ChainIcon = styled(BsLink)`
  font-size: 5rem;
  color: white;
`;
