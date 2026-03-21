import { useEffect, useRef } from 'react';
import { map as leafletMap, tileLayer, Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export function useMap(mapRef: React.RefObject<HTMLDivElement>, city: City) {
  const mapRefInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    if (mapRefInstance.current) {
      return;
    }

    const instance = leafletMap(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    });

    tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(instance);

    mapRefInstance.current = instance;
  }, [mapRef, city]);

  return mapRefInstance;
}
