import Review from '../../models/review';

const reviews: Review[] = [
  {
    id: 0,
    date: new Date('2019-05-08T14:13:56.569Z'),
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 5,
  },
];

export default reviews;
