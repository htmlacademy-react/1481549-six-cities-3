import Card from '@models/card';
import Sorting from '../sorting/sorting';
import CardComponent from '@components/card/card';

type PlacesProps = {
  cards: Card[];
  placesCount: number;
  setActiveCardId: (id: number | undefined) => void;
};

export default function Places({
  placesCount,
  cards,
  setActiveCardId,
}: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            rating={card.rating}
            isPremium={card.isPremium}
            src={card.previewImage}
            price={card.price}
            title={card.title}
            type={card.type}
            onHover={() => setActiveCardId(card.id)}
            onLeave={() => setActiveCardId(undefined)}
            classes={'main'}
          />
        ))}
      </div>
    </section>
  );
}
