import { sorting } from '@data/const';

export default function Sorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sorting.map((opt) => (
          <li key={opt} className="places__option" tabIndex={0}>
            {opt}
          </li>
        ))}
      </ul>
    </form>
  );
}
