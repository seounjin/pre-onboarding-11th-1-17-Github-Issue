import { Header, Content, Wrapper, Avatar } from './IssueDetail.style';
import IssueItem from '../IssueItem/IssueItem';

interface IssueDetailProps {
  // TODO 타입정의해야함
  detailIssue: any;
}

const IssueDetail = ({ detailIssue }: IssueDetailProps) => {
  const {
    body,
    number,
    title,
    created_at,
    comments,
    user: { login, avatar_url },
  } = detailIssue;
  return (
    <Wrapper>
      <Header>
        <Avatar src={avatar_url} />
        <IssueItem
          number={number}
          title={title}
          login={login}
          created_at={created_at}
          comments={comments}
        />
      </Header>

      <Content>{body}</Content>
    </Wrapper>
  );
};

export default IssueDetail;
