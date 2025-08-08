type CityProps = {
  city: string;
};

export default function City(props: CityProps): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{props.city}</span>
        </a>
      </div>
    </div>
  );
}
