import CardComponent from '../../components/common/card/card';
import Header from '../../components/common/header/header';
import Locations from '../../components/main/locations/locations';
import Map from '../../components/main/map/map';
import Sorting from '../../components/main/sorting/sorting';
import MainPageProps from './main-page.props';

import { cards } from '../../data/mocks/cards';

export default function MainPage(props: MainPageProps): JSX.Element {
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
