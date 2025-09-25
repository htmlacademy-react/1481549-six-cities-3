const classes = {
  card: 'place-card__mark',
  offer: 'offer__mark',
};

type ClassesType = keyof typeof classes;

export default function Premium({
  className,
}: {
  className: ClassesType;
}): JSX.Element {
  return (
    <div className={classes[className]}>
      <span>Premium</span>
    </div>
  );
}
