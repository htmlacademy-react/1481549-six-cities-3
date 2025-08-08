import { places } from '../../../../data/mocks/places';
import CardComponent from '../../../../components/card/card';

export default function Places(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((card) => (
          <CardComponent key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
