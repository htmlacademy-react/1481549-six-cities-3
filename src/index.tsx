import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

import { Settings } from './data/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.PlacesCount} />
  </React.StrictMode>
);
