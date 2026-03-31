import { Offer } from '../type/offer';
import { SortType } from '../const';

export const sortOffers: Record<SortType, (items: Offer[]) => Offer[]> = {
  POPULAR: (items: Offer[]) => items,

  LOW_TO_HIGH: (items: Offer[]) => items.toSorted((a, b) => a.price - b.price),

  HIGH_TO_LOW: (items: Offer[]) => items.toSorted((a, b) => b.price - a.price),

  TOP_RATED: (items: Offer[]) => items.toSorted((a, b) => b.rating - a.rating),
};
