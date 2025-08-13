import { Settings } from '@data/const';
import Locations from './components/locations/locations';
import Map from './components/map/map';
import Places from './components/places/places';

export default function MainPage() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <Places placesCount={Settings.PlacesCount} />
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
