import Header from '../../components/common/header/header';
import Locations from './components/locations/locations';
import Login from './components/login/login';

export default function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header showNav={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login />
          <Locations />
        </div>
      </main>
    </div>
  );
}
