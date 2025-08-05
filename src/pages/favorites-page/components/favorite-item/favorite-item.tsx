import Card from '../../../../components/common/card/card';
import City from '../city/city';
import FavoriteItemProps from './favorite-item.props';

export default function FavoriteItem(props: FavoriteItemProps): JSX.Element {
  const { city, cards } = props;
  return (
    <li className="favorites__locations-items">
      <City city={city} />
      <div className="favorites__places">
        {cards.map((card) => (
          <Card key={card.id} {...card} toBookmarks={() => {}} />
        ))}
      </div>
    </li>
  );
}
