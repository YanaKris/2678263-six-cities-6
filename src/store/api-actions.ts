import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../type/offer';
import {
  setOffers,
  setCurrentOffer,
  setOffersLoading,
  setOfferLoading,
  setAuthorizationStatus,
  setUser,
} from './action';
import { AuthorizationStatus } from '../const';

type AuthData = {
  email: string;
  password: string;
};

type AuthInfo = {
  token: string;
  email: string;
  avatarUrl: string;
};

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('offers/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoading(true));

  try {
    const { data } = await api.get<Offer[]>('/offers');
    dispatch(setOffers(data));
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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get('/login');

    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  { extra: AxiosInstance }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<AuthInfo>('/login', {
    email,
    password,
  });
  dispatch(
    setUser({
      email: data.email,
      token: data.token,
    }),
  );

  localStorage.setItem('token', data.token);
  dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
});
