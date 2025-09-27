import { Navigate, useParams } from 'react-router-dom';
import Content from './components/content/content';
import Gallery from './components/gallery/gallery';
import Places from './components/places/places';
import fullOffers from '@data/mocks/full-offers';
import Map from '@components/common/map';
import { AppRoutes } from '../../router/routes';

import { nearPlaces } from '@data/mocks/near-places';

export default function OfferPage() {
  const { id } = useParams() as { id: string };

  const offer = fullOffers.find((o) => o.id === id);

  return offer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Gallery />
        <Content offer={offer} />
        <Map classes="offer" cards={nearPlaces} city={nearPlaces[0].city} />
      </section>
      <div className="container">
        <Places nearPlaces={nearPlaces} />
      </div>
    </main>
  ) : (
    <Navigate to={AppRoutes.NotFound} />
  );
}
