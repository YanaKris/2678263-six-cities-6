import { State } from '../type/state';
import { NameSpace } from '../const';

export const selectOffers = (state: State) => state[NameSpace.Offers].offers;

export const selectCity = (state: State) => state[NameSpace.Offers].city;
