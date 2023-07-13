import moment from 'moment';
import React from 'react';
import {
  Wrapper,
  LeftSection,
  Title,
  Writer,
  RightSection,
  CommentCount,
  Date,
} from './IssueItem.style';

interface IssueItemProps {
  number: string;
  title: string;
  login: string;
  created_at: string;
  comments: string;
}

const IssueItem = ({
  number,
  title,
  login,
  created_at,
  comments,
}: IssueItemProps) => {
  return (
    <Wrapper>
      <LeftSection>
        <Title>{'#' + number + ' ' + title} </Title>
        <Writer>작성자: {login + ', '}</Writer>
        <Date>작성일: {moment(created_at).format('YYYY-MM-DD')}</Date>
      </LeftSection>
      <RightSection>
        <CommentCount>코멘트: {comments}</CommentCount>
      </RightSection>
    </Wrapper>
  );
};

export default React.memo(IssueItem);
