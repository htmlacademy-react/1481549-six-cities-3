type ReviewProps = {
  // id: number;
  src: string;
  userName: string;
  // rating: number;
  text: string;
  dateString: string;
  datetime: string;
};

export default function Review({
  src,
  userName,
  text,
  dateString,
  datetime,
}: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={src}
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
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={datetime}>
          {dateString}
        </time>
      </div>
    </li>
  );
}
