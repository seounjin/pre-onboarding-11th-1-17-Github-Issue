import { Fragment, ReactNode, useEffect, useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useIssue } from '../../hooks/useIssue';
import { isItMultipleOfFive } from '../../utils/isItMultipleOfFive';
import IssueItem from '../IssueItem/IssueItem';
import ScrollObserver from '../ScrollObserver/ScrollObserver';
import { Wrapper, IssueItemWrapper, StyledLink } from './IssueList.style';

interface IssueListProps {
  children?: ReactNode;
}

const IssueList = ({ children }: IssueListProps) => {
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
              <IssueItemWrapper>
                <StyledLink to={`/detail/${number}`}>
                  <IssueItem
                    number={number}
                    title={title}
                    login={login}
                    created_at={created_at}
                    comments={comments}
                  />
                </StyledLink>
              </IssueItemWrapper>

              {isItMultipleOfFive(index + 1) && (
                <IssueItemWrapper>{children}</IssueItemWrapper>
              )}
            </Fragment>
          )
        )}
      <ScrollObserver ref={target} />
    </Wrapper>
  );
};

export default IssueList;
