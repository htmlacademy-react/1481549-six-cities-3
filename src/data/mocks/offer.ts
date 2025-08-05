import CardType from '../../models/cardType';
import Offer from '../../models/offer';

const offer: Offer = {
  isPremium: true,
  name: 'Beautiful &; luxurious studio at great location',
  rating: 4.8,
  features: {
    entire: CardType.Apartment,
    bedrooms: 3,
    adults: 4,
  },
  price: 120,
  options: [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  src: 'img/avatar-angelina.jpg',
  host: 'Angelina',
  hostStatus: 'Pro',
  description1:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  description2:
    'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
};

export default offer;
