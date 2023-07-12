import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: 700px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IssueItemWrapper = styled.li`
  padding: 0 20px;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
