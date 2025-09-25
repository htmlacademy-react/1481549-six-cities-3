import { CardClassType } from '@components/card/card';
import Card from '@models/card';
import CardComponent from '@components/card/card';

type CardListProps = {
  cards: Card[];
  className: CardClassType;
  setActiveCardId?: (id: number | undefined) => void;
};

const classes = {
  main: 'cities__places-list places__list tabs__content',
  favorites: 'favorites__places',
  near: 'near-places__list places__list',
};

export default function CardList({
  cards,
  className,
  setActiveCardId,
}: CardListProps): JSX.Element {
  return (
    <div className={classes[className]}>
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
          className={className}
        />
      ))}
    </div>
  );
}
