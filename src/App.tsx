import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:number" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>

      <LoadingScreen />
    </>
  );
}

export default App;
