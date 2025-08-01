import Main from '../pages/Main';
import AppProps from './App.props';

export default function App(props: AppProps): JSX.Element {
  return <Main placesCount={props.placesCount} />;
}
