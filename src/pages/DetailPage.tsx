import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueDetail from '../components/IssueDetail/IssueDetail';
import { useDetailIssue } from '../hooks/useIssue';
import MainLayout from '../layout/MainLayout/MainLayout';

const DetailPage = () => {
  const { number } = useParams();
  const { detailIssue, handleDetailIssueItemsResponse } = useDetailIssue();

  useEffect(() => {
    if (number) {
      const detailNumber = parseInt(number);
      handleDetailIssueItemsResponse(detailNumber);
    }
  }, []);

  return (
    <MainLayout>
      {detailIssue && <IssueDetail detailIssue={detailIssue} />}
    </MainLayout>
  );
};

export default DetailPage;