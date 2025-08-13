import Favorites from './components/favorites/favorites';
import Footer from '@components/footer/footer';

export default function FavoritesPage(): JSX.Element {
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites />
        </div>
      </main>
      <Footer />
    </>
  );
}
