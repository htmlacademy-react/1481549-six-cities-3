import reviews from '@data/mocks/reviews';
import Form from './form';
import Review from './review';
import getAuthorizationStatus from '@data/mocks/auth';
import { AuthorizationStatus } from '@data/const';

export default function Reviews(): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            userName={review.user.name}
            userImage={review.user.avatarUrl}
            comment={review.comment}
            rating={review.rating}
            date={review.date}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <Form />}
    </section>
  );
}
