import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { NameSpace } from '../const';

export const store = configureStore({
  reducer: {
    [NameSpace.Offers]: reducer,
  },
});
