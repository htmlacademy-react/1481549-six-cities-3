import { Navigate, useParams } from 'react-router-dom';
import Content from './components/content/content';
import Gallery from './components/gallery/gallery';
import Map from './components/map/map';
import Places from './components/places/places';
import fullOffers from '@data/mocks/fullOffers';
import { AppRoutes } from '../../router/routes';

export default function OfferPage() {
  const { id } = useParams() as { id: string };

  const offer = fullOffers.find((o) => o.id === Number(id));

  return offer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Gallery />
        <Content offer={offer} />
        <Map />
      </section>
      <div className="container">
        <Places />
      </div>
    </main>
  ) : (
    <Navigate to={AppRoutes.NotFound} />
  );
}
