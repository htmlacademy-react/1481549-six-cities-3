import Card from '../../models/card';
import CardType from '../../models/cardType';

export const places: Card[] = [
  {
    id: 0,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    isBookmark: true,
    rating: 5,
    name: 'Wood and stone place',
    type: CardType.Room,
  },
  {
    id: 1,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    isBookmark: true,
    rating: 5,
    name: 'Canal View Prinsengracht',
    type: CardType.Apartment,
  },
  {
    id: 2,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 132,
    isBookmark: true,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: CardType.Apartment,
  },
];
