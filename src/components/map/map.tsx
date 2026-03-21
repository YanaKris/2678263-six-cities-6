import { useEffect, useRef } from 'react';
import { icon, marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { Offer } from '../../type/offer';

import { MARKER_DEFAULT } from '../../const';

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
  const mapRef = useRef<HTMLDivElement>(null);
  const mapRefInstance = useMap(mapRef, city);

  const defaultCustomIcon = icon({
    iconUrl: MARKER_DEFAULT,
  });

  useEffect(() => {
    const map = mapRefInstance.current;
    if (!map) {
      return;
    }

    const markerLayer = layerGroup().addTo(map);

    offers.forEach((offer) => {
      marker([offer.location.latitude, offer.location.longitude], {
        icon: defaultCustomIcon,
      }).addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [mapRefInstance, offers, defaultCustomIcon]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}
