import { Link, generatePath } from 'react-router-dom';
import CardType from '@models/card-type';
import Premium from '../common/premium';
import { AppRoutes } from '../../router/routes';
import cn from 'classnames';

type CardProps = {
  id: string;
  isPremium: boolean;
  src: string;
  price: number;
  rating: number;
  title: string;
  type: CardType;
  className: CardClassType;
  onHover?: (id: string | undefined) => void;
};

const classes = {
  main: {
    container: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
    info: '',
  },
  favorites: {
    container: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
    info: 'favorites__card-info',
  },
  near: {
    container: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
    info: '',
  },
};

export type CardClassType = keyof typeof classes;

export default function Card({
  id,
  isPremium,
  src,
  price,
  title,
  type,
  rating,
  className,
  onHover,
}: CardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', classes[className].container)}
      onMouseEnter={() => onHover?.(id)}
      onMouseLeave={() => onHover?.(undefined)}
    >
      {isPremium && <Premium className={'card'} />}
      <div
        className={cn(
          'place-card__image-wrapper',
          classes[className].imageWrapper
        )}
      >
        <a href={src}>
          <img
            className="place-card__image"
            src={src}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className={cn('place-card__info', classes[className].info)}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoutes.Offer, { id: `${id}` })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
