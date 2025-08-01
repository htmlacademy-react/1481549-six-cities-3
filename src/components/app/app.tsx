import MainPage from '../../pages/main-page/main-page';
import AppProps from './app.props';

export default function App(props: AppProps): JSX.Element {
  return <MainPage placesCount={props.placesCount} />;
}
