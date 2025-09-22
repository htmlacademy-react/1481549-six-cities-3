import Card from '@models/card';
import Locations from './components/locations/locations';
import Map from '../../components/common/map';
import Places from './components/places/places';
import { useState } from 'react';

type MainPageProps = {
  cards: Card[];
};

export default function MainPage({ cards }: MainPageProps) {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            placesCount={cards.length}
            cards={cards}
            setActiveCardId={(id) => {
              setActiveCardId(id);
            }}
          />
          <div className="cities__right-section">
            <Map
              classes="cities"
              cards={cards}
              city={cards[0].city}
              selectedCardId={activeCardId}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
