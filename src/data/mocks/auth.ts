import { AuthorizationStatus } from '@data/const';

export default function getAuthorizationStatus(): keyof typeof AuthorizationStatus {
  return AuthorizationStatus.Auth;
}
