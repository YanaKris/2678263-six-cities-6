import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../type/offer';
import { City } from '../type/city';
import {
  setCity,
  setSortType,
  setOffers,
  setCurrentOffer,
  setOffersLoading,
  setOfferLoading,
} from './action';
import { SortType } from '../const';

const initialState: {
  city: City['name'];
  offers: Offer[];
  currentOffer: Offer | null;
  sortType: SortType;
  isOffersLoading: boolean;
  isOfferLoading: boolean;
} = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  sortType: 'POPULAR',
  isOffersLoading: false,
  isOfferLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setOfferLoading, (state, action) => {
      state.isOfferLoading = action.payload;
    });
});
