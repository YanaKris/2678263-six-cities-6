import { OfferPreview } from '../../type/offer';
import OfferItem from '../offer-item/offer-item';
import PlacesSorting from '../places-sorting/places-sorting';

type OfferListProps = {
  offers: OfferPreview[];
};

export default function OfferList({ offers }: OfferListProps) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in Amsterdam
          </b>
          <PlacesSorting />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferItem key={offer.id} offer={offer} block="cities" />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
