import Card from '@models/card';
import FavoriteItem from './components/favorite-item/favorite-item';

type FavoritesPageProps = {
  favorites: { city: string; cards: Card[] }[];
};

export default function FavoritesPage({
  favorites,
}: FavoritesPageProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorites.map((f) => (
              <FavoriteItem key={f.city} city={f.city} cards={f.cards} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
