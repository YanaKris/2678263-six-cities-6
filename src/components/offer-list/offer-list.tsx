import { OfferPreview } from '../../type/offer';
import OfferItem from '../offer-item/offer-item';

type OfferListProps = {
  offers: OfferPreview[];
  onOfferHover: (id: string | null) => void;
};

export default function OfferList({ offers, onOfferHover }: OfferListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          block="cities"
          onOfferItemHover={() => onOfferHover(offer.id)}
          onOfferItemLeave={() => onOfferHover(null)}
        />
      ))}
    </div>
  );
}
