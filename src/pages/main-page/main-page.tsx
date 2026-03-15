import OfferList from '../../components/offer-list/offer-list';
import { Offer } from '../../type/offer';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';

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
        <OfferList offers={offers} />
      </main>
    </div>
  );
}
