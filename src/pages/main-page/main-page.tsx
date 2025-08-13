import Locations from './components/locations/locations';
import Map from './components/map/map';
import Places from './components/places/places';

type MainPageProps = {
  placesCount: number;
};

export default function MainPage({ placesCount }: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <Places placesCount={placesCount} />
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
