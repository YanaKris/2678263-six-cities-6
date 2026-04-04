import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../type/offer';
import { City } from '../type/city';
import { setCity, setSortType } from './action';
import { SortType } from '../const';
import { fetchOffersAction, fetchOfferByIdAction } from './api-actions';

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
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchOfferByIdAction.pending, (state) => {
      state.isOfferLoading = true;
      state.currentOffer = null;
    })
    .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOfferByIdAction.rejected, (state) => {
      state.isOfferLoading = false;
    });
});
