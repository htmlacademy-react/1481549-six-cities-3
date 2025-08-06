import Header from '../../components/common/header/header';
import Locations from './components/locations/locations';
import Map from './components/map/map';
import MainPageProps from './main-page.props';
import Places from './components/places/places';

export default function MainPage(props: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header showNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places placesCount={props.placesCount} />
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
