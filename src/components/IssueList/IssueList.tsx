import { Fragment, useEffect, useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useIssue } from '../../hooks/useIssue';
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';
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
  const { issue, handleIssueItemsResponse } = useIssue();
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);

  useEffect(() => {
    if (Intersecting) handleIssueItemsResponse();
  }, [Intersecting]);

  return (
    <Wrapper>
      {issue &&
        issue.map(
          ({ number, title, comments, created_at, user: { login } }, index) => (
            <Fragment key={`i${index}`}>
              {index !== 0 && !(index % 4) && <AdvertisementBanner />}
              <Item>
                <LeftSection>
                  <Title>{'#' + number + ' ' + title} </Title>
                  <Writer>작성자: {login + ', '}</Writer>
                  <Date>작성일: {created_at}</Date>
                </LeftSection>
                <RightSection>
                  <CommentCount>코멘트: {comments}</CommentCount>
                </RightSection>
              </Item>
            </Fragment>
          )
        )}
      <div ref={target} style={{ height: '1px' }} />
    </Wrapper>
  );
};

export default IssueList;
