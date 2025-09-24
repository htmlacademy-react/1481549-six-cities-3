import { CardClassType } from '@components/card/card';
import Card from '@models/card';
import CardComponent from '@components/card/card';

type CardListProps = {
  cards: Card[];
  classes: CardClassType;
  setActiveCardId?: (id: number | undefined) => void;
};

const Classes = {
  main: 'cities__places-list places__list tabs__content',
  favorites: 'favorites__places',
  near: 'near-places__list places__list',
};

export default function CardList({
  cards,
  classes,
  setActiveCardId,
}: CardListProps): JSX.Element {
  return (
    <div className={Classes[classes]}>
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          id={card.id}
          rating={card.rating}
          isPremium={card.isPremium}
          src={card.previewImage}
          price={card.price}
          title={card.title}
          type={card.type}
          onHover={setActiveCardId ? () => setActiveCardId(card.id) : undefined}
          onLeave={
            setActiveCardId ? () => setActiveCardId(undefined) : undefined
          }
          classes={classes}
        />
      ))}
    </div>
  );
}
