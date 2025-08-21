import { cities } from '@data/const';
import cn from 'classnames';

export default function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => (
          <li className="locations__item" key={city}>
            <a
              className={cn('locations__item-link', 'tabs__item', {
                ['tabs__item--active']: i === 0, // пока первый всегда активный.
              })}
              href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
