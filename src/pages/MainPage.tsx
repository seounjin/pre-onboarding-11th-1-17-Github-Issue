import IssueList from '../components/IssueList/IssueList';
import { ShadeScreen } from '../components/ShadeScreen/ShadeScreen';
import Spinner from '../components/Spinner/Spinner';
import { useLoading } from '../hooks/useLoading';
import MainLayout from '../layout/MainLayout/MainLayout';

const MainPage = () => {
  const { isLoading } = useLoading();

  return (
    <MainLayout>
      <IssueList />
      {isLoading && (
        <ShadeScreen>
          <Spinner />
        </ShadeScreen>
      )}
    </MainLayout>
  );
};

export default MainPage;
