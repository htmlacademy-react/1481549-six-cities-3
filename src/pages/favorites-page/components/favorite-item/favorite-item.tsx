// import Card from '../../../../models/card';
import CardComponent from '../../../../components/common/card/card';
import Card from '../../../../models/card';
import City from '../city/city';

type FavoriteItemProps = {
  city: string;
  cards: Card[];
};

export default function FavoriteItem(props: FavoriteItemProps): JSX.Element {
  const { city, cards } = props;
  return (
    <li className="favorites__locations-items">
      <City city={city} />
      <div className="favorites__places">
        {cards.map((card) => (
          <CardComponent key={card.id} {...card} />
        ))}
      </div>
    </li>
  );
}
