import OfferList from '../../components/offer-list/offer-list';
import { Offer } from '../../type/offer';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import PlacesSorting from '../../components/places-sorting/places-sorting';

type MainPageProps = {
  offers: Offer[];
};

export default function MainPage({ offers }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity="Amsterdam" />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {offers[0].city.name}
              </b>
              <PlacesSorting />
              <OfferList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
