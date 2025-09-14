import Card from '../../models/card';

export const cards: Card[] = [
  {
    id: 0,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 5,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 40.816881,
      longitude: -73.872768,
      zoom: 8,
    },
    city: {
      name: 'Амстердам',
      location: {
        latitude: 40.835292,
        longitude: -73.916236,
        zoom: 10,
      },
    },
  },
  {
    id: 1,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 5,
    title: 'Wood and stone place',
    type: 'room',
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 40.816881,
      longitude: -73.872768,
      zoom: 8,
    },
    city: {
      name: 'Амстердам',
      location: {
        latitude: 40.835292,
        longitude: -73.916236,
        zoom: 10,
      },
    },
  },
];
