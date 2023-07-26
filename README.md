# pre-onboarding-11th-3-17th (Github API Project)

<br />

# 실행방법

```
$ npm install
$ npm run start

```

# 요구사항에 따른 기능구현


<br />

## 이슈 목록 및 상세 화면 기능 구현

### 이슈 목록 화면

- div 대신  ul li 를 활용하여 이슈 목록을 구현하였습니다.
- ul과  li 는 목록들을 표현하기 위한 태그이기 때문에 이를 선택하여 사용하였습니다.
- 의미에 맞는 태그를 사용하면 검색엔진이 이해하기 쉽고 접근성과 유지보수성을 향상 시킬 수 있습니다.

<br />

### 이슈 상세 목록

- useParams 훅을 사용하여 url의 파라미터를 받아 상세 이슈 number를 가져왔습니다.
- 해당 number에 맞는 상세 이슈 목록을 요청하여 데이터를 가져 왔습니다.

```tsx
const { number } = useParams();
const { detailIssue, getIssueDetailItem } = useDetailIssue();

useEffect(() => {
   if (number) {
     const detailNumber = parseInt(number);
     getIssueDetailItem(detailNumber);
   }
}, []);
```

<br />


### AdvertisementBanner 컴포넌트

- IssueList에 AdvertisementBanner 컴포넌트를 children props로 전달하였습니다.
- AdvertisementBanner 컴포넌트가 IssueList에 사용됨을 명확히 알 수 있고 해당위치에 필요에 따라 다른 컴포넌트를 위치 시킬 수있습니다.

```tsx
const MainPage = () => {
  return (
    <MainLayout>
      <IssueList>
        <AdvertisementBanner
          imgSrc={
            '<https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100>'
          }
          link={'<https://www.wanted.co.kr/>'}
        />
      </IssueList>
    </MainLayout>
  );
};

export default MainPage;

```

<br />

### React.memo를 사용한 렌더링 최적화

- props 변경이 없는 컴포넌트에 React.memo 적용하였습니다.
- props 변경이 자주있는 컴포넌트라면 어차피 계속 변경되고 계속해서 이전 props를 비교하는 불필요한 작업을 하기 떄문에 변경이 없는 컴포넌트에 사용해야 합니다.

```tsx
const IssueItem = ({
  number,
  title,
  login,
  created_at,
  comments,
}: IssueItemProps) => {
  return (
    <Wrapper>
      <LeftSection>
        <Title>{'#' + number + ' ' + title} </Title>
        <Writer>작성자: {login + ', '}</Writer>
        <Date>작성일: {moment(created_at).format('YYYY-MM-DD')}</Date>
      </LeftSection>
      <RightSection>
        <CommentCount>코멘트: {comments}</CommentCount>
      </RightSection>
    </Wrapper>
  );
};

export default React.memo(IssueItem);
```

<br />

### 무한스크롤 기능

- IntersectionObserver를 사용하여 무한스크롤 구현하였습니다.
- ScrollObserver 컴포넌트에 관찰자로 두고 issueList 맨끝에 위치시킵니다.
- 해당 요소는 IntersectionObserver에 등록되어 특정 위치에 교차하는 시점을 감지합니다.
- ScrollObserver 컴포넌트가 화면에 나타나는 순간, 즉 issueList 끝에 도달했을때 issue데이터를 요청합니다.

<br />


## Context API를 활용한 API 연동

### 관심사에 따라 Provider 분리

- IssueProvider는 이슈 아이템의 전반적인 데이터를 관리하였습니다.
- DetailIssueProvider는 상세 이슈 정보를 관리하였습니다.
- 즉 관심사에 따라 Provider를 분리하였습니다.
- 관심사에 따라 분리하게 되면 리렌더링을 최소화 하고 코드의 가독성과 유지보수성이 향상됩니다.

<br />


## 데이터 요청 중 로딩 표시

### 로딩 컴포넌트

- 전역적으로 사용하는 로딩 컴포넌트는 최상위 컴포넌트인 App에 위치시켰습니다.
- 로딩 상태값은 useContext를 사용하여 전역적으로 관리합니다.

```tsx
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:number" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>

     {/* 로딩 컴포넌트 */}
      <LoadingScreen />
    </>
  );
}

```

<br />

### API 요청 기능 및 로딩 처리

- useFetcher hook을 사용하여 API 요청 기능을 구현하였습니다.
- 해당 훅을 사용하면 API 요청 기능을 재사용할 수 있습니다.
- API 요청 중이면 로딩 상태를 활성화하고, 요청이 완료되거나 오류가 발생하면 로딩 상태를 비활성화합니다.
- API 요청마다 중복되던 로딩 처리 문제를 해결할 수 있었습니다.

```tsx
export const useFetcher = () => {
  const { handleLoading } = useLoading();

  const fetcher = async (
    method: Method,
    url: string,
    rest: AxiosRequestConfig = {}
  ) => {
    try {
      handleLoading(true);
      const res = await axiosClient.request({ method, url, ...rest });
      handleLoading(false);
      return res.data;
    } catch (error) {
      handleLoading(false);
      //TODO 에러처리
    }
  };

  return fetcher;
};

```

<br />

