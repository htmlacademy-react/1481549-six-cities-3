import { Navigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  const isAuth = true;
  return isAuth ? children : <Navigate to={Routes.Login} />;
}
