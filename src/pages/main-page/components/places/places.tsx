import Card from '@models/card';
import Sorting from '../sorting/sorting';
import CardList from '@components/common/card-list';

type PlacesProps = {
  cards: Card[];
  placesCount: number;
  onCardHover: (id: string | undefined) => void;
};

export default function Places({
  placesCount,
  cards,
  onCardHover,
}: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <Sorting />
      <CardList cards={cards} className="main" onCardHover={onCardHover} />
    </section>
  );
}
