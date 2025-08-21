import { createBrowserRouter } from 'react-router-dom';

import PageLayout from '@components/layout/page-layout';
import PrivateRoute from '@components/private/private-route';

import FavoritesPage from '@pages/favorites-page/favorites-page';
import MainPage from '@pages/main-page/main-page';
import OfferPage from '@pages/offer-page/offer-page';
import ErrorPage from '@pages/error-page/error-page';
import LoginPage from '@pages/login-page/login-page';

import { Routes } from './routes';

const router = createBrowserRouter([
  {
    path: Routes.Main,
    index: true,
    element: (
      <PageLayout classNames={['page--gray', 'page--main']}>
        <MainPage />
      </PageLayout>
    ),
  },
  {
    path: Routes.Favorite,
    element: (
      <PrivateRoute>
        <PageLayout withFooter>
          <FavoritesPage />
        </PageLayout>
      </PrivateRoute>
    ),
  },
  {
    path: Routes.Offer,
    element: (
      <PageLayout>
        <OfferPage />
      </PageLayout>
    ),
  },
  {
    path: Routes.Login,
    element: (
      <PrivateRoute isReverse>
        <PageLayout classNames={['page--login']}>
          <LoginPage />
        </PageLayout>
      </PrivateRoute>
    ),
  },
  {
    path: Routes.Error,
    element: (
      <PageLayout>
        <ErrorPage />
      </PageLayout>
    ),
  },
]);

export default router;
