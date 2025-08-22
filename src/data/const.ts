const Settings = {
  PlacesCount: 312,
} as const;

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const sorting: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const AuthorizationStatus = {
  Auth: 'Auth',
  NotAuth: 'NotAuth',
  Unknown: 'Unknown',
} as const;

export { Settings, AuthorizationStatus, cities, sorting };
