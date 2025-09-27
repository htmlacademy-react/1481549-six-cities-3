import CardType from './card-type';
import City from './city';
import Location from './location';

type Card = {
  id: string;
  title: string;
  type: CardType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export default Card;
