// import { places } from '../../../../data/mocks/places';
import CardComponent from '@components/card/card';
import Card from '@models/card';

type PlacesProps = {
  nearPlaces: Card[];
  setActiveCardId: (id: number | undefined) => void;
};

export default function Places({
  nearPlaces,
  setActiveCardId,
}: PlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            rating={card.rating}
            isPremium={card.isPremium}
            src={card.previewImage}
            price={card.price}
            title={card.title}
            type={card.type}
            classes={'near'}
            onHover={() => setActiveCardId(card.id)}
            onLeave={() => setActiveCardId(undefined)}
          />
        ))}
      </div>
    </section>
  );
}
