import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from '@data/const';
import { AppRoutes } from './routes';

const POLICIES = {
  'user:authorized': (
    authStatus: keyof typeof AuthorizationStatus,
    children: ReactNode
  ) =>
    authStatus === AuthorizationStatus.Auth ? (
      children
    ) : (
      <Navigate to={AppRoutes.Login} />
    ),
  'user:unauthorized': (
    authStatus: keyof typeof AuthorizationStatus,
    children: ReactNode
  ) =>
    authStatus === AuthorizationStatus.NotAuth ? (
      children
    ) : (
      <Navigate to={AppRoutes.Main} />
    ),
};

export type RoutePolicy = keyof typeof POLICIES;

/* eslint-disable-next-line */
export default POLICIES;
