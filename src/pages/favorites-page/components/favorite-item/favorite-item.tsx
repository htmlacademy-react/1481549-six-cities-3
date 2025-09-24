import Card from '@models/card';
import City from '../city/city';
import CardList from '@components/common/card-list';

type FavoriteItemProps = {
  city: string;
  cards: Card[];
};

export default function FavoriteItem({
  city,
  cards,
}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <City city={city} />
      <CardList cards={cards} classes={'favorites'} />
    </li>
  );
}
