import React from 'react';
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
  return (
    <Wrapper>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
      <Item>
        <LeftSection>
          <Title>제목</Title>
          <Writer>작성자: 라이터,</Writer>
          <Date>작성일: 날짜</Date>
        </LeftSection>
        <RightSection>
          <CommentCount>코멘트: 60</CommentCount>
        </RightSection>
      </Item>
    </Wrapper>
  );
};

export default IssueList;
