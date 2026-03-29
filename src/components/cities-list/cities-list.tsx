import { CityName, CITIES } from '../../const';
import { setCity } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type CitiesListProps = {
  activeCity: CityName;
};

export default function CitiesList({ activeCity }: CitiesListProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${
              city === activeCity ? 'tabs__item--active' : ''
            }`}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
