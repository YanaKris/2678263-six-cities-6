import { useEffect, useRef, useState } from 'react';
import { map as leafletMap, tileLayer, Map as LeafletMap } from 'leaflet';
import { City } from '../type/city';

export default function useMap(
  mapRef: React.RefObject<HTMLDivElement>,
  city: City,
) {
  const mapRefInstance = useRef<LeafletMap | null>(null);
  const [map, setMap] = useState<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapRefInstance.current) {
      return;
    }

    const instance = leafletMap(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    });

    tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      },
    ).addTo(instance);

    mapRefInstance.current = instance;
    setMap(instance);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mapRefInstance.current) {
      mapRefInstance.current.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom]);

  return map;
}
