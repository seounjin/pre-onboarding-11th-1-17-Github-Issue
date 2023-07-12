import IssueList from '../components/IssueList/IssueList';
import MainLayout from '../layout/MainLayout/MainLayout';
import { IssueProvider } from '../providers/IssueProvider';

const MainPage = () => {
  return (
    <IssueProvider>
      <MainLayout>
        <IssueList />
      </MainLayout>
    </IssueProvider>
  );
};

export default MainPage;
