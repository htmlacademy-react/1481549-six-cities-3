import { Link, generatePath } from 'react-router-dom';
import CardType from '@models/cardType';
import Premium from '../common/premium';
import { AppRoutes } from '../../router/routes';
import cn from 'classnames';

type CardProps = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  rating: number;
  title: string;
  type: CardType;
  classes: CardClassType;
  // isBookmark: boolean;
  // toBookmarks: () => void;
  onHover?: () => void;
  onLeave?: () => void;
};

const Classes = {
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

export type CardClassType = keyof typeof Classes;

export default function Card({
  id,
  isPremium,
  src,
  price,
  title,
  type,
  rating,
  classes,
  onHover,
  onLeave,
}: CardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', Classes[classes].container)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isPremium && <Premium classes={'card'} />}
      <div
        className={cn(
          'place-card__image-wrapper',
          Classes[classes].imageWrapper
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
      <div className={cn('place-card__info', Classes[classes].info)}>
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
