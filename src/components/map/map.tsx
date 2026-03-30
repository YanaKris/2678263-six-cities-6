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

export default function Map(props: MapProps): JSX.Element {
  const { city, offers, activeOfferId } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(
            point.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}
