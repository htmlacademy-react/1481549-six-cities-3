import { ChangeEvent, useState } from 'react';

type InputProps = {
  id: string;
  value: number;
  title: string;
};

const inputs: InputProps[] = [
  { id: '5-stars', value: 5, title: 'perfect' },
  { id: '4-stars', value: 4, title: 'good' },
  { id: '3-stars', value: 3, title: 'not bad' },
  { id: '2-stars', value: 2, title: 'badly' },
  { id: '1-star', value: 1, title: 'terribly' },
];

export default function Form() {
  const [state, setState] = useState({
    rating: 0,
    review: '',
  });

  const handleChange = (
    evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = evt.target;

    setState({ ...state, [name]: name === 'rating' ? Number(value) : value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {inputs.map((input) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={input.value}
              id={input.id}
              type="radio"
              checked={state.rating === input.value}
              onChange={(evt) => handleChange(evt)}
            />
            <label
              htmlFor={input.id}
              className="reviews__rating-label form__rating-label"
              title={input.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={state.review}
        onChange={(evt) => handleChange(evt)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
