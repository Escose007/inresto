import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import MainPage from './pages/mainPage';
import RestoInfo from './components/restoInfo';
import RestoMenu from './components/restoMenu';
import MenuCard from './components/menuCard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/" element={<LoginPage />} />
        <Route exect path="signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />}>
          <Route exect path="restoinfo" element={<RestoInfo />} />
          <Route exect path="restomenu/:menuType" element={<RestoMenu />} />
          <Route exect path="addrestomenu/:menuType" element={<MenuCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
