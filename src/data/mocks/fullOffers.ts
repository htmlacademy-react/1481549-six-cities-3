import Offer from '../../models/offer';

const fullOffers: Offer[] = [
  {
    id: 0,
    title: 'Beautiful &; luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Test',
      location: {
        latitude: 0,
        longitude: 1,
        zoom: 8,
      },
    },
    location: {
      latitude: 0,
      longitude: 1,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: [
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
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/room.jpg'],
    maxAdults: 4,
  },
  {
    id: 1,
    title: 'Wood and stone place',
    type: 'room',
    price: 120,
    city: {
      name: 'Test',
      location: {
        latitude: 0,
        longitude: 1,
        zoom: 8,
      },
    },
    location: {
      latitude: 0,
      longitude: 1,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: [
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
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/room.jpg'],
    maxAdults: 4,
  },
];

export default fullOffers;
