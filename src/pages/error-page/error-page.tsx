import { Link } from 'react-router-dom';
import { Routes } from '../../router/routes';

export default function ErrorPage(): JSX.Element {
  return (
    <div className="container">
      <div className="error">
        <p className="error__message">Страница не найдена</p>
        <Link to={Routes.Main} className="error__back">
          Вернуться на главную
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </div>
    </div>
  );
}
