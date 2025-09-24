import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Content from './components/content/content';
import Gallery from './components/gallery/gallery';
import Places from './components/places/places';
import fullOffers from '@data/mocks/full-offers';
import Map from '@components/common/map';
import { AppRoutes } from '../../router/routes';

import { places } from '@data/mocks/places';

export default function OfferPage() {
  const { id } = useParams() as { id: string };
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);

  const offer = fullOffers.find((o) => o.id === Number(id));

  return offer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Gallery />
        <Content offer={offer} />
        <Map
          classes="offer"
          cards={places}
          city={places[0].city}
          selectedCardId={activeCardId}
        />
      </section>
      <div className="container">
        <Places
          nearPlaces={places}
          setActiveCardId={(cardId) => {
            setActiveCardId(cardId);
          }}
        />
      </div>
    </main>
  ) : (
    <Navigate to={AppRoutes.NotFound} />
  );
}
