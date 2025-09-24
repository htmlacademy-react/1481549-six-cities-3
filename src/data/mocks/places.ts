import Card from '../../models/card';

export const places: Card[] = [
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
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
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
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
  },
];
