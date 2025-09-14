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

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {
  Settings,
  AuthorizationStatus,
  cities,
  sorting,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
};
