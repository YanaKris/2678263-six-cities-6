import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../type/offer';
import { City } from '../type/city';
import { setOffers, setCity, setSortType } from './action';
import { offers } from '../mocks/offers';
import { SortType } from '../const';

const initialState: {
  city: City['name'];
  offers: Offer[];
  sortType: SortType;
} = {
  city: 'Paris',
  offers: offers,
  sortType: 'POPULAR',
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
    });
});
