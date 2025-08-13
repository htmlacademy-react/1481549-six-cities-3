import Header from '@components/header/header';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header showNav />
      <Outlet />
    </div>
  );
}
