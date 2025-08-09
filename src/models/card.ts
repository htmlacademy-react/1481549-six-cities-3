import CardType from './cardType';
import Location from './location';

type Card = {
  id: number;
  title: string;
  type: CardType;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export default Card;
