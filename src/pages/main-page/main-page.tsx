import OfferList from '../../components/offer-list/offer-list';
import { Offer } from '../../type/offer';
import { City } from '../../type/city';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Map from '../../components/map/map';
import { useState } from 'react';
import { SORT, SortType } from '../../const';

type MainPageProps = {
  offers: Offer[];
};

// добавила временно для теста переключения городов
const cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 12,
    },
  },
];

export default function MainPage({ offers }: MainPageProps) {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [sortType, setSortType] = useState<SortType>(SORT.POPULAR);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const city = activeCity;
  const filteredOffers = offers.filter(
    (offer) => offer.city.name === city.name,
  );

  const sortOffers = {
    [SORT.POPULAR]: (items: Offer[]) => items,

    [SORT.LOW_TO_HIGH]: (items: Offer[]) =>
      [...items].sort((a, b) => a.price - b.price),

    [SORT.HIGH_TO_LOW]: (items: Offer[]) =>
      [...items].sort((a, b) => b.price - a.price),

    [SORT.TOP_RATED]: (items: Offer[]) =>
      [...items].sort((a, b) => b.rating - a.rating),
  };

  const sortedOffers = sortOffers[sortType](filteredOffers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              activeCity={city.name}
              onCityClick={(cityName) => {
                const selectedCity = cities.find((c) => c.name === cityName);
                if (selectedCity) {
                  setActiveCity(selectedCity);
                }
              }}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {city.name}
              </b>
              <PlacesSorting activeSort={sortType} onSortChange={setSortType} />
              <OfferList
                offers={sortedOffers}
                onOfferHover={setActiveOfferId}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  offers={sortedOffers}
                  activeOfferId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
