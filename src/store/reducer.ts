import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../type/offer';
import { City } from '../type/city';
import { setOffers, setCity, setSortType } from './action';
import { SortType } from '../const';
import { fetchOffersAction, fetchOfferByIdAction } from './api-actions';

const initialState: {
  city: City['name'];
  offers: Offer[];
  currentOffer: Offer | null;
  sortType: SortType;
  isLoading: boolean;
} = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  sortType: 'POPULAR',
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchOfferByIdAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOfferByIdAction.rejected, (state) => {
      state.isLoading = false;
    });
});
