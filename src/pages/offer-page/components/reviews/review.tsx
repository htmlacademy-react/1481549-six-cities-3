type ReviewProps = {
  // id: number;
  src: string;
  userName: string;
  // rating: number;
  text: string;
  dateString: string;
  datetime: string;
};

export default function Review(props: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={props.src}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{props.userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{props.text}</p>
        <time className="reviews__time" dateTime={props.datetime}>
          {props.dateString}
        </time>
      </div>
    </li>
  );
}
