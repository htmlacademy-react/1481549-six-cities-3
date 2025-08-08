import { cards } from '@data/mocks/cards';
import Sorting from '../sorting/sorting';
import CardComponent from '@components/card/card';

type PlacesProps = {
  placesCount: number;
};

export default function Places({ placesCount }: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
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
    </section>
  );
}
