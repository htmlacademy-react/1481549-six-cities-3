import Logo from './logo';
import Auth from './auth';
import NotAuth from './not-auth';

type HeaderProps = {
  isAuth: boolean;
};

export default function Header({ isAuth }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isAuth ? <Auth /> : <NotAuth />}
        </div>
      </div>
    </header>
  );
}
