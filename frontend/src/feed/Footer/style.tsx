import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
  margin-bottom: 3rem;
`;
