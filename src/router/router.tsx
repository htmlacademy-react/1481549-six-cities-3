import { createBrowserRouter } from 'react-router-dom';

import PageLayout from '@components/layout/page-layout';
import PrivateRoute from '@components/private/private-route';

import { AppRoutes } from './routes';
import { cards } from '@data/mocks/cards';
import { favorites } from '@data/mocks/favorites';
import { lazy } from 'react';

/* eslint-disable react-refresh/only-export-components */
// https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
const MainPage = lazy(() => import('@pages/main-page/main-page'));
const FavoritesPage = lazy(
  () => import('@pages/favorites-page/favorites-page')
);
const OfferPage = lazy(() => import('@pages/offer-page/offer-page'));
const NotFoundPage = lazy(() => import('@pages/not-found-page/not-found-page'));
const LoginPage = lazy(() => import('@pages/login-page/login-page'));

const router = createBrowserRouter([
  {
    path: AppRoutes.Main,
    index: true,
    element: (
      <PageLayout classNames={['page--gray', 'page--main']}>
        <MainPage cards={cards} />
      </PageLayout>
    ),
  },
  {
    path: AppRoutes.Favorite,
    element: (
      <PrivateRoute policy={'user:authorized'}>
        <PageLayout withFooter>
          <FavoritesPage favorites={favorites} />
        </PageLayout>
      </PrivateRoute>
    ),
  },
  {
    path: AppRoutes.Offer,
    element: (
      <PageLayout>
        <OfferPage />
      </PageLayout>
    ),
  },
  {
    path: AppRoutes.Login,
    element: (
      <PrivateRoute policy={'user:unauthorized'}>
        <PageLayout classNames={['page--login']}>
          <LoginPage />
        </PageLayout>
      </PrivateRoute>
    ),
  },
  {
    path: AppRoutes.NotFound,
    element: (
      <PageLayout>
        <NotFoundPage />
      </PageLayout>
    ),
  },
]);

export default router;
