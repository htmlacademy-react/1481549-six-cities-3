// import { places } from '../../../../data/mocks/places';
import CardList from '@components/common/card-list';
import Card from '@models/card';

type PlacesProps = {
  nearPlaces: Card[];
};

export default function Places({ nearPlaces }: PlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <CardList cards={nearPlaces} className="near" />
    </section>
  );
}
