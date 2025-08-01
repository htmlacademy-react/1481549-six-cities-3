import CardType from '../../../models/cardType';

type CardProps = {
  isPremium: boolean;
  src: string;
  price: number;
  rating: number;
  name: string;
  type: CardType;
  isBookmark: boolean;
  toBookmarks: () => void;
};

export default CardProps;
