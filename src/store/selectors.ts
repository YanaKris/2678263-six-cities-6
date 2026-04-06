import { State } from '../type/state';
import { NameSpace } from '../const';

export const selectOffers = (state: State) => state[NameSpace.Offers].offers;

export const selectCity = (state: State) => state[NameSpace.Offers].city;

export const selectSortType = (state: State) =>
  state[NameSpace.Offers].sortType;

export const selectIsOffersLoading = (state: State) =>
  state[NameSpace.Offers].isOffersLoading;

export const selectIsOfferLoading = (state: State) =>
  state[NameSpace.Offers].isOfferLoading;

export const selectCurrentOffer = (state: State) =>
  state[NameSpace.Offers].currentOffer;

export const selectAuthorizationStatus = (state: State) =>
  state[NameSpace.Offers].authorizationStatus;
