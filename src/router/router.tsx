import { createBrowserRouter } from 'react-router-dom';

import PageLayout from '@components/layout/page-layout';
import PrivateRoute from '@components/private/private-route';

import FavoritesPage from '@pages/favorites-page/favorites-page';
import MainPage from '@pages/main-page/main-page';
import OfferPage from '@pages/offer-page/offer-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import LoginPage from '@pages/login-page/login-page';

import { AppRoutes } from './routes';
import { cards } from '@data/mocks/cards';
import { favorites } from '@data/mocks/favorites';

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
      <PrivateRoute>
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
      <PrivateRoute isReverse>
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
