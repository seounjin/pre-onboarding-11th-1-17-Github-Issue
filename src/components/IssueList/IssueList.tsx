import { Fragment, useEffect, useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useIssue } from '../../hooks/useIssue';
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';
import IssueItem from '../IssueItem/IssueItem';
import { Wrapper, IssueItemWrapper, StyledLink } from './IssueList.style';

const IssueList = () => {
  const { issue, getIssueItems } = useIssue();
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);

  useEffect(() => {
    if (Intersecting) getIssueItems();
  }, [Intersecting]);

  return (
    <Wrapper>
      {issue &&
        issue.map(
          ({ number, title, comments, created_at, user: { login } }, index) => (
            <Fragment key={`i${index}`}>
              {index !== 0 && !(index % 4) && (
                <StyledLink to="https://www.wanted.co.kr/" target="_blank">
                  <AdvertisementBanner />
                </StyledLink>
              )}
              <StyledLink to={`/detail/${number}`}>
                <IssueItemWrapper>
                  <IssueItem
                    number={number}
                    title={title}
                    login={login}
                    created_at={created_at}
                    comments={comments}
                  />
                </IssueItemWrapper>
              </StyledLink>
            </Fragment>
          )
        )}
      <div ref={target} style={{ height: '1px' }} />
    </Wrapper>
  );
};

export default IssueList;
