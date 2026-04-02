import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { NameSpace } from '../const';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    [NameSpace.Offers]: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
