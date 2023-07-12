import MainLayout from '../layout/MainLayout/MainLayout';
import { IssueProvider } from '../providers/IssueProvider';

const MainPage = () => {
  return (
    <IssueProvider>
      <MainLayout>MainPage</MainLayout>
    </IssueProvider>
  );
};

export default MainPage;
