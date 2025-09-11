const Classes = {
  card: 'place-card__mark',
  offer: 'offer__mark',
};

type ClassesType = keyof typeof Classes;

export default function Premium({
  classes,
}: {
  classes: ClassesType;
}): JSX.Element {
  return (
    <div className={Classes[classes]}>
      <span>Premium</span>
    </div>
  );
}
