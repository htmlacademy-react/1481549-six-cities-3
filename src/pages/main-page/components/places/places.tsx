import Sorting from '../sorting/sorting';
import CardComponent from '../../../../components/common/card/card';

import { cards } from '../../../../data/mocks/cards';
import PlacesProps from './places.props';

export default function Places(props: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {props.placesCount} places to stay in Amsterdam
      </b>
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            {...card}
            toBookmarks={() => {}} // заглушка
          />
        ))}
      </div>
    </section>
  );
}
