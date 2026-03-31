import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { Offer } from '../../type/offer';
import { City } from '../../type/city';

import { MARKER_DEFAULT, MARKER_ACTIVE } from '../../const';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: Offer['id'] | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT,
});

const currentCustomIcon = new Icon({
  iconUrl: MARKER_ACTIVE,
});

export default function Map({ city, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapRefInstance = useMap(mapRef, city);

  useEffect(() => {
    const map = mapRefInstance.current;
    if (!map) {
      return;
    }

    const markerLayer = layerGroup().addTo(map);

    offers.forEach((point) => {
      new Marker([point.location.latitude, point.location.longitude])
        .setIcon(
          point.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
        )
        .addTo(markerLayer);
    });

    return () => {
      markerLayer.clearLayers();
    };
  }, [offers, activeOfferId, mapRefInstance]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}
