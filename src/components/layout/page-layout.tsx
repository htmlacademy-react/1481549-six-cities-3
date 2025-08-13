import cn from 'classnames';

import Header from '@components/header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import Footer from '@components/footer/footer';

export default function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div
      className={cn('page', {
        ['page__gray']: pathname === Routes.Main,
        ['page__main']: pathname === Routes.Main,
      })}
    >
      {pathname !== Routes.Login && <Header isAuth={false} />}
      <Outlet />
      {pathname === Routes.Favorite && <Footer />}
    </div>
  );
}
