import { OfferPreview } from '../../type/offer';
import OfferItem from '../offer-item/offer-item';
import { useState } from 'react';

type OfferListProps = {
  offers: OfferPreview[];
};

export default function OfferList({ offers }: OfferListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          block="cities"
          onOfferItemHover={() => setActiveOfferId(offer.id)}
          onOfferItemLeave={() => setActiveOfferId(null)}
        />
      ))}
      <span>{activeOfferId}</span>
    </div>
  );
}
