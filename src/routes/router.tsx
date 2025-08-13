import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/layout/page-layout';
import PrivateRoute from '@components/private/private-route';

import FavoritesPage from '@pages/favorites-page/favorites-page';
import MainPage from '@pages/main-page/main-page';
import OfferPage from '@pages/offer-page/offer-page';
import ErrorPage from '@pages/error-page/error-page';
import LoginPage from '@pages/login-page/login-page';

import { Routes } from './routes';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Routes.Main,
        index: true,
        element: <MainPage />,
        // lazy: () => import('@pages/main-page/main-page'),
      },
      {
        path: Routes.Favorite,
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: Routes.Offer,
        element: <OfferPage />,
        // lazy: () => import('@pages/offer-page/offer-page'),
      },
    ],
  },
  {
    path: Routes.Login,
    element: <LoginPage />,
    // lazy: () => import('@pages/login-page/login-page'),
  },
  {
    path: Routes.Error,
    // lazy: () => import('@pages/error-page/error-page'),
    element: <ErrorPage />,
  },
]);

export default router;
