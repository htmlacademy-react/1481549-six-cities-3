import Header from '@components/header/header';
import Locations from './components/locations/locations';
import Login from './components/login/login';
import getAuthorizationStatus from '@data/mocks/auth';
import { AuthorizationStatus } from '@data/const';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';

export default function LoginPage(): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return authorizationStatus === AuthorizationStatus.NotAuth ? (
    <div className="page page--gray page--login">
      <Header isAuth={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login />
          <Locations />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to={Routes.Main} />
  );
}
