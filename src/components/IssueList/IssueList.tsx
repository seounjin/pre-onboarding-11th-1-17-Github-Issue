import React from 'react';
import { IssueContextType } from '../../contexts/IssueContext';
import { useIssue } from '../../hooks/useIssue';
import {
  Wrapper,
  Item,
  RightSection,
  LeftSection,
  Title,
  Writer,
  Date,
  CommentCount,
} from './IssueList.style';

const IssueList = () => {
  const { issue } = useIssue();

  return (
    <Wrapper>
      {issue &&
        issue.map(
          ({ number, title, comments, created_at, user: { login } }, index) => (
            <Item key={`i${index}`}>
              <LeftSection>
                <Title>{'#' + number + ' ' + title} </Title>
                <Writer>작성자: {login + ', '}</Writer>
                <Date>작성일: {created_at}</Date>
              </LeftSection>
              <RightSection>
                <CommentCount>코멘트: {comments}</CommentCount>
              </RightSection>
            </Item>
          )
        )}
    </Wrapper>
  );
};

export default IssueList;
