import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 0 20px;
  max-width: 100%;
  gap: 10px;
`;

export const Content = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: 600px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;
