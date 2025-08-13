import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';

import { Settings } from '@data/const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import Layout from '@components/layout/page-layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <MainPage placesCount={Settings.PlacesCount} />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '/offer/:id',
        element: <OfferPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
