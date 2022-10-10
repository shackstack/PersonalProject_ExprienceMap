import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from 'pages/UserPage';
import MainPage from 'pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/스윙스" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
