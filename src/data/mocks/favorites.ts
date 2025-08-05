import Card from '../../models/card';
import CardType from '../../models/cardType';

export const favorites: { city: string; cards: Card[] }[] = [
  {
    city: 'Amsterdam',
    cards: [
      {
        id: 0,
        isPremium: true,
        src: 'img/apartment-small-03.jpg',
        price: 180,
        isBookmark: true,
        rating: 5,
        name: 'Nice, cozy, warm big bed apartment',
        type: CardType.Apartment,
      },
      {
        id: 1,
        isPremium: false,
        src: 'img/room-small.jpg',
        price: 80,
        isBookmark: true,
        rating: 5,
        name: 'Wood and stone place',
        type: CardType.Room,
      },
    ],
  },
  {
    city: 'Cologne',
    cards: [
      {
        id: 2,
        isPremium: false,
        src: 'img/apartment-small-04.jpg',
        price: 180,
        isBookmark: true,
        rating: 5,
        name: 'White castle',
        type: CardType.Apartment,
      },
    ],
  },
];
