import Locations from './components/locations/locations';
import Map from '../../components/common/map';
import Places from './components/places/places';
import { useState } from 'react';
import { changeCity } from '@store/actions';
import Card from '@models/card';
import { useAppDispatch, useAppSelector } from '@store/hooks';

type WithPlacesProps = {
  city: string;
  cards: Card[];
  selectedCardId: string | undefined;
  onCardHover: (id: string | undefined) => void;
};

const WithPlaces = ({
  city,
  cards,
  selectedCardId,
  onCardHover,
}: WithPlacesProps) => (
  <div className="cities__places-container container">
    <Places
      city={city}
      placesCount={cards.length}
      cards={cards}
      onCardHover={onCardHover}
    />
    <div className="cities__right-section">
      <Map
        classes="cities"
        cards={cards}
        city={cards[0].city}
        selectedCardId={selectedCardId}
      />
    </div>
  </div>
);

const NoPlaces = ({ city }: { city: string }) => (
  <div className="cities__places-container cities__places-container--empty container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {city}
        </p>
      </div>
    </section>
  </div>
);

export default function MainPage() {
  const city = useAppSelector((state) => state.city);
  const cards = useAppSelector((state) =>
    state.cards.filter((card) => card.city.name === city)
  );

  const dispatch = useAppDispatch();

  const [activeCardId, setActiveCardId] = useState<string | undefined>(
    undefined
  );

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations
          activeCity={city}
          onCityChange={(c) => dispatch(changeCity(c))}
        />
      </div>
      <div className="cities">
        {cards.length > 0 ? (
          <WithPlaces
            city={city}
            cards={cards}
            selectedCardId={activeCardId}
            onCardHover={setActiveCardId}
          />
        ) : (
          <NoPlaces city={city} />
        )}
      </div>
    </main>
  );
}
