import CardComponent from '../components/card/Card';
import Header from '../components/header/Header';
import Locations from '../components/locations/Locations';
import Map from '../components/map/Map';
import Sorting from '../components/sorting/Sorting';
import Card from '../types/card';
import CardType from '../types/cardType';
import MainProps from './Main.props';

const cards: Card[] = [
  {
    id: 0,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    isBookmark: false,
    rating: 5,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: CardType.Apartment,
  },
  {
    id: 1,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    isBookmark: false,
    rating: 5,
    name: 'Wood and stone place',
    type: CardType.Room,
  },
  {
    id: 2,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    isBookmark: false,
    rating: 5,
    name: 'Canal View Prinsengracht',
    type: CardType.Apartment,
  },
  {
    id: 3,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    isBookmark: false,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: CardType.Apartment,
  },
  {
    id: 4,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    isBookmark: false,
    rating: 5,
    name: 'Wood and stone place',
    type: CardType.Room,
  },
];

export default function Main(props: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
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
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
