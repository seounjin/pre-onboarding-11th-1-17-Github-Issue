import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  padding-bottom: 10px;

  border-bottom: 1px solid #000;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Writer = styled.span``;

export const Date = styled.span``;

export const CommentCount = styled.span``;

export const LeftSection = styled.div`
  flex: 1;
`;

export const RightSection = styled.div``;
