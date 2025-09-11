import cn from 'classnames';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import { AuthorizationStatus } from '@data/const';
import getAuthorizationStatus from '@data/mocks/auth';

type PageLayoutProps = {
  className?: string[];
  children: JSX.Element;
  withFooter?: boolean;
};

export default function PageLayout({
  className: classNames,
  children,
  withFooter,
}: PageLayoutProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={cn('page', ...[classNames || []])}>
      <Header isAuth={authorizationStatus === AuthorizationStatus.Auth} />
      {children}
      {withFooter && <Footer />}
    </div>
  );
}
