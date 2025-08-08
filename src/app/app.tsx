// import FavoritesPage from '../../pages/favorites-page/favorites-page';
// import LoginPage from '../../pages/login-page/login-page';
// import OfferPage from '../../pages/offer-page/offer-page';
import MainPage from '../pages/main-page/main-page';

export default function App(props: { placesCount: number }): JSX.Element {
  return <MainPage placesCount={props.placesCount} />;
  // return <OfferPage />;
  // return <FavoritesPage />;
  // return <LoginPage />;
}
