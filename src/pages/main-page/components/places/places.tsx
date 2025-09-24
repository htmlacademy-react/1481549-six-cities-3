import Card from '@models/card';
import Sorting from '../sorting/sorting';
import CardList from '@components/common/card-list';

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
      <CardList
        cards={cards}
        classes={'main'}
        setActiveCardId={setActiveCardId}
      />
    </section>
  );
}
