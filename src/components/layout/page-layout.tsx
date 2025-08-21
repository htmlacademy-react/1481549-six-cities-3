import cn from 'classnames';

import Header from '@components/header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import Footer from '@components/footer/footer';
import { AuthorizationStatus } from '@data/const';
import getAuthorizationStatus from '@data/mocks/auth';

export default function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div
      className={cn('page', {
        ['page--gray']: pathname === Routes.Main,
        ['page--main']: pathname === Routes.Main,
        ['page--login']: pathname === Routes.Login,
      })}
    >
      {pathname !== Routes.Login && (
        <Header isAuth={authorizationStatus === AuthorizationStatus.Auth} />
      )}
      <Outlet />
      {pathname === Routes.Favorite && <Footer />}
    </div>
  );
}
