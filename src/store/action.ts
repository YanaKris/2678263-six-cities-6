import { createAction } from '@reduxjs/toolkit';
import { Offer} from '../type/offer';
import { City } from '../type/city';

export const setOffers = createAction<Offer[]>('OFFERS/setOffers');

export const setCity = createAction<City['name']>('OFFERS/setCity');
