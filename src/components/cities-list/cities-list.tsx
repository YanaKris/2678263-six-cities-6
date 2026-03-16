import { CityName, CITIES } from '../../const';


type CitiesListProps = {
  activeCity: CityName;
};

export default function CitiesList({ activeCity }: CitiesListProps) {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${
              city === activeCity ? 'tabs__item--active' : ''
            }`}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
