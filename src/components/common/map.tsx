export default function Map({
  classes,
}: {
  classes: 'cities' | 'offer';
}): JSX.Element {
  return <section className={`${classes}__map map`}></section>;
}
