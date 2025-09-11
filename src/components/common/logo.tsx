import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';

const Sizes = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

type LogoType = keyof typeof Sizes;

export default function Logo({ classes }: { classes: LogoType }): JSX.Element {
  const { pathname } = useLocation();
  const { width, height } = Sizes[classes];

  return (
    <Link
      to={AppRoutes.Main}
      className={cn(`${classes}__logo-link`, {
        [`${classes}__logo-link--active`]: pathname === AppRoutes.Main,
      })}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}
