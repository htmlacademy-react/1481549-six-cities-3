import { Link } from 'react-router-dom';
import CardType from '@models/cardType';
import Premium from './premium';

type CardProps = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  rating: number;
  title: string;
  type: CardType;
  // isBookmark: boolean;
  // toBookmarks: () => void;
  onHover?: () => void;
  onLeave?: () => void;
};

export default function Card({
  id,
  isPremium,
  src,
  price,
  title,
  type,
  rating,
  onHover,
  onLeave,
}: CardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isPremium && <Premium />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={src}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
