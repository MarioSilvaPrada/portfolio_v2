import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  a:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const StyledIcon = styled.a`
  color: ${({ theme }) => theme.colors.main};
  font-size: 4rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateX(-0.6rem);
  }
`;
