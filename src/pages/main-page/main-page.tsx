import Locations from './components/locations/locations';
import Map from '../../components/common/map';
import Places from './components/places/places';
import { useState } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { changeCity } from '@store/actions';

export default function MainPage() {
  const city = useAppSelector((state) => state.city);
  // нормально делать логику фильтрации в селекторе?
  // или вынести её в редьюсер и при установке города заполнять отдельное поле filteredCards?
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
        <div className="cities__places-container container">
          <Places
            city={city}
            placesCount={cards.length}
            cards={cards}
            onCardHover={setActiveCardId}
          />
          <div className="cities__right-section">
            {/* что делать если cards пустой, и неоткуда взять город? */}
            {cards.length > 0 && (
              <Map
                classes="cities"
                cards={cards}
                city={cards[0].city}
                selectedCardId={activeCardId}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
