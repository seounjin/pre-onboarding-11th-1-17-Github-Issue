import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:number" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
