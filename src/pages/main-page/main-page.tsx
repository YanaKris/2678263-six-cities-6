import OfferList from '../../components/offer-list/offer-list';

import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Map from '../../components/map/map';
import { useState, useEffect } from 'react';
import { SortType} from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  selectOffers,
  selectCity,
  selectSortType,
  selectIsOffersLoading,
} from '../../store/selectors';
import { sortOffers } from '../../utils/sort';

import { setSortType } from '../../store/action';
import { fetchOffersAction } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';

export default function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const sortType = useAppSelector(selectSortType);
  const offers = useAppSelector(selectOffers);
  const cityName = useAppSelector(selectCity);
  const isLoading = useAppSelector(selectIsOffersLoading);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  if (isLoading) {
    return <Spinner />;
  }

  const currentCityOffer = offers.find((offer) => offer.city.name === cityName);
  const city = currentCityOffer?.city;

  if (!city) {
    return <div>No offers available for {cityName}</div>;
  }

  const filteredOffers = offers.filter((offer) => offer.city.name === cityName);
  const sortedOffers = sortOffers[sortType](filteredOffers);

  const handleSortChange = (newSort: SortType) => {
    dispatch(setSortType(newSort));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city.name} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {city.name}
              </b>
              <PlacesSorting
                activeSort={sortType}
                onSortChange={handleSortChange}
              />
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
