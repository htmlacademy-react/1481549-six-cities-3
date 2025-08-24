import getAuthorizationStatus from '@data/mocks/auth';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';
import { AuthorizationStatus } from '@data/const';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
};

export default function PrivateRoute({
  isReverse,
  children,
}: PrivateRouteProps): JSX.Element {
  const isAuth = getAuthorizationStatus();

  const condition = isReverse
    ? isAuth === AuthorizationStatus.NotAuth
    : isAuth === AuthorizationStatus.Auth;

  return condition ? (
    children
  ) : (
    <Navigate to={isReverse ? AppRoutes.Main : AppRoutes.Login} />
  );
}
