// import Card from '../../../../models/card';
import CardComponent from '../../../../components/card/card';
import Card from '../../../../models/card';
import City from '../city/city';

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
      <div className="favorites__places">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            isPremium={card.isPremium}
            src={card.previewImage}
            price={card.price}
            title={card.title}
            type={card.type}
          />
        ))}
      </div>
    </li>
  );
}
