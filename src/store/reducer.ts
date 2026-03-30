import {createReducer} from '@reduxjs/toolkit';
import { Offer} from '../type/offer';
import { City } from '../type/city';
import { setOffers, setCity} from './action';
import { offers } from '../mocks/offers';

const initialState: {
city: City['name'];
offers: Offer[];
} = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
