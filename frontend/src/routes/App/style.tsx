import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Title = styled.div`
  color: red;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: -10rem;
  bottom: 0;
`;

export const ProfilePic = styled.img`
  width: 55rem;
`;

export const GreetingsWrapper = styled.div`
  position: absolute;
  bottom: 40%;
`;

export const Text = styled.h1`
  color: white;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
  font-size: 4rem;
`;

export const MainText = styled.h1`
  color: white;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
  font-size: 8.4rem;
  line-height: 8rem;
`;

export const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 3rem;
  text-shadow: 2px 20px 10px rgba(0, 0, 0, 0.25);
`;
