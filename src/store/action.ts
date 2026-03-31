import { createAction } from '@reduxjs/toolkit';
import { Offer} from '../type/offer';
import { City } from '../type/city';
import { SortType } from '../const';

export const setOffers = createAction<Offer[]>('OFFERS/setOffers');

export const setCity = createAction<City['name']>('OFFERS/setCity');

export const setSortType = createAction<SortType>('OFFERS/setSortType');
