import { createBrowserRouter } from 'react-router-dom';

import { Settings } from '@data/const';

import Layout from '@components/layout/page-layout';
import PrivateRoute from '@components/private/private-route';
import MainPage from '@pages/main-page/main-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import OfferPage from '@pages/offer-page/offer-page';
import LoginPage from '@pages/login-page/login-page';
import ErrorPage from '@pages/error-page/error-page';

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
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
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
  {
    path: '/*',
    element: <ErrorPage />,
  },
]);

export default router;
