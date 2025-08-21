import { Link } from 'react-router-dom';
import { Routes } from '../../router/routes';

import styles from './not-found-page.module.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="container">
      <div className={styles.error}>
        <p className={styles.message}>Страница не найдена</p>
        <Link to={Routes.Main} className={styles.back}>
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
