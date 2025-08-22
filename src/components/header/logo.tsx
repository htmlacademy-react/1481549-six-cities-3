import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../../router/routes';

export default function Logo(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Link
      to={Routes.Main}
      className={cn('header__logo-link', {
        ['header__logo-link--active']: pathname === Routes.Main,
      })}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
