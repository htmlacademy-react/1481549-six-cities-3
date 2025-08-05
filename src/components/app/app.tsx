// import FavoritesPage from '../../pages/favorites-page/favorites-page';
// import LoginPage from '../../pages/login-page/login-page';
// import Offer from '../../pages/offer-page/offer-page';
import MainPage from '../../pages/main-page/main-page';
import AppProps from './app.props';

export default function App(props: AppProps): JSX.Element {
  return <MainPage placesCount={props.placesCount} />;
  // return <Offer />;
  // return <FavoritesPage />;
  // return <LoginPage />;
}
