import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../type/offer';
import {
  setOffers,
  setCurrentOffer,
  setOffersLoading,
  setOfferLoading,
} from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('offers/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoading(true));

  try {
    const { data } = await api.get<Offer[]>('/offers');
    dispatch(setOffers(data));
  } catch (e) {
  } finally {
    dispatch(setOffersLoading(false));
  }
});

export const fetchOfferByIdAction = createAsyncThunk<
  void,
  string,
  { extra: AxiosInstance }
>('offer/fetchById', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOfferLoading(true));
  dispatch(setCurrentOffer(null));

  try {
    const { data } = await api.get<Offer>(`/offers/${offerId}`);
    dispatch(setCurrentOffer(data));
  } catch (e) {
    dispatch(setCurrentOffer(null));
  } finally {
    dispatch(setOfferLoading(false));
  }
});
