import Content from './components/content/content';
import Gallery from './components/gallery/gallery';
import Map from './components/map/map';
import Places from './components/places/places';

export default function OfferPage(): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Gallery />
        <Content />
        <Map />
      </section>
      <div className="container">
        <Places />
      </div>
    </main>
  );
}
