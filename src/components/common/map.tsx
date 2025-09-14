import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';

import useMap from '@hooks/useMap';
import City from '@models/city';
import Card from '@models/card';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '@data/const';

type MapProps = {
  city: City;
  cards: Card[];
  selectedCard: Card | undefined;
  classes: 'cities' | 'offer';
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({
  classes,
  city,
  cards,
  selectedCard,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });

        marker
          .setIcon(
            selectedCard !== undefined && card.title === selectedCard.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cards, selectedCard]);

  return <section className={`${classes}__map map`} ref={mapRef}></section>;
}
