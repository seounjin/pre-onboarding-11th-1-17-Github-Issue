import AdvertisementBanner from '../components/AdvertisementBanner/AdvertisementBanner';
import IssueList from '../components/IssueList/IssueList';
import MainLayout from '../layout/MainLayout/MainLayout';

const MainPage = () => {
  return (
    <MainLayout>
      <IssueList>
        <AdvertisementBanner
          imgSrc={
            'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
          }
          link={'https://www.wanted.co.kr/'}
        />
      </IssueList>
    </MainLayout>
  );
};

export default MainPage;
