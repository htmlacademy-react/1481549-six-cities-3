import Header from '@components/header/header';
import Locations from './components/locations/locations';
import Login from './components/login/login';

export default function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header isAuth={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login />
          <Locations />
        </div>
      </main>
    </div>
  );
}
