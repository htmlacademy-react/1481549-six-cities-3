import Card from '../../models/card';

export const favorites: Card[] = [
  {
    id: '0',
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 5,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 0,
      longitude: 1,
      zoom: 8,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 0,
        longitude: 1,
        zoom: 8,
      },
    },
  },
  {
    id: '1',
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 5,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 0,
      longitude: 1,
      zoom: 8,
    },
    city: {
      name: 'Bamsterdam',
      location: {
        latitude: 0,
        longitude: 1,
        zoom: 8,
      },
    },
  },
];
