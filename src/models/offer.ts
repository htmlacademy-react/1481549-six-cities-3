import CardType from './cardType';

type Offer = {
  isPremium: boolean;
  name: string;
  rating: number;
  features: {
    entire: CardType;
    bedrooms: number;
    adults: number;
  };
  price: number;
  options: string[];
  src: string;
  host: string;
  hostStatus: string;
  description1: string;
  description2: string;
};

export default Offer;
