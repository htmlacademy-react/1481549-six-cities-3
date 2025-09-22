import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';

import useMap from '@hooks/useMap';
import City from '@models/city';
import Card from '@models/card';

import markerImgDefault from '../../../public/img/pin.svg';
import markerImgActive from '../../../public/img/pin-active.svg';

type MapProps = {
  city: City;
  cards: Card[];
  selectedCardId?: number;
  classes: 'cities' | 'offer';
};

const defaultCustomIcon = new Icon({
  iconUrl: markerImgDefault,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: markerImgActive,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export default function Map({
  classes,
  city,
  cards,
  selectedCardId,
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
            selectedCardId !== undefined && card.id === selectedCardId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cards, selectedCardId]);

  return <section className={`${classes}__map map`} ref={mapRef}></section>;
}
