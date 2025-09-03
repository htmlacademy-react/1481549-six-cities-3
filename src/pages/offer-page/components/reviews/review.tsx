import dayjs from 'dayjs';

type ReviewProps = {
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
};

export default function Review({
  userName,
  userImage,
  rating,
  comment,
  date,
}: ReviewProps): JSX.Element {
  const formattedDate = dayjs(date).format('DD.MM.YYYY HH.mm');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={userImage}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.toString()}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}
