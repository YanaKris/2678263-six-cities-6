import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../type/offer';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>('/offers');
    return data;
  }
);

export const fetchOfferByIdAction = createAsyncThunk<
  Offer,
  string,
  { extra: AxiosInstance }
>(
  'offer/fetchById',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`/offers/${offerId}`);
    return data;
  }
);
