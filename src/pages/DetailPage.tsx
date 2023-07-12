import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueDetail from '../components/IssueDetail/IssueDetail';
import { ShadeScreen } from '../components/ShadeScreen/ShadeScreen';
import Spinner from '../components/Spinner/Spinner';
import { useDetailIssue } from '../hooks/useIssue';
import { useLoading } from '../hooks/useLoading';
import MainLayout from '../layout/MainLayout/MainLayout';

const DetailPage = () => {
  const { number } = useParams();
  const { detailIssue, getIssueDetailItem } = useDetailIssue();
  const { isLoading } = useLoading();

  useEffect(() => {
    if (number) {
      const detailNumber = parseInt(number);
      getIssueDetailItem(detailNumber);
    }
  }, []);

  return (
    <MainLayout>
      {detailIssue && <IssueDetail detailIssue={detailIssue} />}
      {isLoading && (
        <ShadeScreen>
          <Spinner />
        </ShadeScreen>
      )}
    </MainLayout>
  );
};

export default DetailPage;
