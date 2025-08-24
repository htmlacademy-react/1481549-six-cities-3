import getAuthorizationStatus from '@data/mocks/auth';
import POLICIES, { RoutePolicy } from '../../router/policies';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
  policy: RoutePolicy;
};

export default function PrivateRoute({ children, policy }: PrivateRouteProps) {
  const authStatus = getAuthorizationStatus();

  const policyCheck = POLICIES[policy];

  return policyCheck(authStatus, children);
}
