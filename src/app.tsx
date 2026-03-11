import MainPage from './pages/main-page/main-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from './const';

type AppScreenProps = {
  offersCount: number;
};

export default function App({ offersCount }: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <FavoritesPage />
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>);
}
