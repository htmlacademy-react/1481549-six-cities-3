import reviews from '../../../../data/mocks/reviews';
import Form from './form';
import Review from './review';

export default function Reviews(): JSX.Element {
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
            src={review.src}
            userName={review.userName}
            text={review.text}
            dateString={review.dateString}
            datetime={review.datetime}
          />
        ))}
      </ul>
      <Form />
    </section>
  );
}
