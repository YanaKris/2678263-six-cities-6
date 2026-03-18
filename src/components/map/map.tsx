import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { Offer } from '../../type/offer';

import {MARKER_DEFAULT} from '../../const';

type MapProps = {
city: {
location: {
latitude: number;
longitude: number;
zoom: number;
};
};
offers: Offer[];
};

export default function Map({ city, offers }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MARKER_DEFAULT,
  });

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {
          icon: defaultCustomIcon,
        })
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, offers, defaultCustomIcon]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}
