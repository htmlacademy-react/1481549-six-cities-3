import CardType from './cardType';
import City from './city';
import Location from './location';

type Offer = {
  id: string;
  title: string;
  type: CardType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export default Offer;
