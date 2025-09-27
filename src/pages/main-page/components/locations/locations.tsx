import { cities } from '@data/const';
import cn from 'classnames';

type LocationsProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
};

export default function Locations({
  activeCity,
  onCityChange,
}: LocationsProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={cn('locations__item-link', 'tabs__item', {
                ['tabs__item--active']: city === activeCity,
              })}
              href="#"
              onClick={() => onCityChange(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
