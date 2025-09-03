import Card from '@models/card';
import FavoriteItem from './components/favorite-item/favorite-item';

type FavoritesPageProps = {
  favorites: Card[];
};

export default function FavoritesPage({
  favorites,
}: FavoritesPageProps): JSX.Element {
  const cities = favorites.reduce<{ [city: string]: Card[] }>((acc, card) => {
    if (!(card.city.name in acc)) {
      acc[card.city.name] = [];
    }
    acc[card.city.name].push(card);
    return acc;
  }, {});

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.keys(cities).map((city) => (
              <FavoriteItem key={city} city={city} cards={cities[city]} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
