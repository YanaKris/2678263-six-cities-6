import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type City = {
location: {
latitude: number;
longitude: number;
zoom: number;
};
};

export function useMap(
  mapRef: React.RefObject<HTMLDivElement>,
  city: City
) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    if (mapInstanceRef.current) {
      setMap(mapInstanceRef.current);
      return;
    }

    const instance = leaflet.map(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
      .addTo(instance);

    mapInstanceRef.current = instance;
    setMap(instance);
  }, [mapRef, city]);

  return map;
}
