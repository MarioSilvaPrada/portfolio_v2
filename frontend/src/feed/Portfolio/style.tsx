import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto;
  max-width: 100%;
`;

export const Text = styled.p``;

export const Table = styled.table`
  table-layout: auto;
  border-spacing: 3px;
  width: 100%;

  & th,
  td {
    color: white;
    padding: 0.5rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.main};
  }

  & tr td:first-child {
    font-size: 1.8rem;
    text-align: center;
  }

  & tr:last-child td:first-child {
    border-bottom-left-radius: 1rem;
  }

  & tr:last-child td:last-child {
    border-bottom-right-radius: 1rem;
  }

  & th:first-child {
    border-top-left-radius: 1rem;
  }

  & th:last-child {
    border-top-right-radius: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.L}) {
    & tr td.description-column {
      min-width: 35rem;
    }
  }
`;

export const LabelContainer = styled.div`
  border-radius: 10px;
  padding: 0.3rem;
  font-size: 0.8rem;
  text-align: center;
  background-color: ${({ color }) => color};
  color: black;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.L}) {
    font-size: 1.1rem;
  }
`;
