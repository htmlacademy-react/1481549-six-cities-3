import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';

export default function Auth(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoutes.Favorite}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to={AppRoutes.Login} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
