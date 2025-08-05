import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import Favorites from './components/favorites/favorites';

export default function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header showNav />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites />
        </div>
      </main>
      <Footer />
    </div>
  );
}
