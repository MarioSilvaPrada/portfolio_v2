import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Text = styled.p``;
