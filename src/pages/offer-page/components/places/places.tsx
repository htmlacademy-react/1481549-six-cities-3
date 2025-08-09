// import { places } from '../../../../data/mocks/places';
import CardComponent from '@components/card/card';
import { places } from '@data/mocks/places';

export default function Places(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((card) => (
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
