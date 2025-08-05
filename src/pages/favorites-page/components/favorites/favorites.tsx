import { favorites } from '../../../../data/mocks/favorites';
import FavoriteItem from '../favorite-item/favorite-item';

export default function Favorites(): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favorites.map((f) => (
          <FavoriteItem key={f.city} city={f.city} cards={f.cards} />
        ))}
      </ul>
    </section>
  );
}
