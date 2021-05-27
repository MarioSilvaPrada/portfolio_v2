import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-right: ${({ theme }) => theme.dimensions.marginPage};

  a:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const StyledIcon = styled.a`
  color: ${({ theme }) => theme.colors.main};
  font-size: 4rem;
  cursor: pointer;
`;
