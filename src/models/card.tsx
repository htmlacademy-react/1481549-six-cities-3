import CardType from './cardType';

type Card = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  rating: number;
  name: string;
  type: CardType;
  isBookmark: boolean;
};

export default Card;
