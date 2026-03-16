import { City } from './city';
import { Location } from './location';
import { User } from './user';
import { OfferType } from '../const';


export type OfferPreview = {
  id: string;
  title: string;
  type: OfferType;
  price: number;

  previewImage: string;

  city: City;
  location: Location;

  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offer = OfferPreview & {
  description: string;
  bedrooms: number;
  goods: string[];

  host: User;
  images: string[];

  maxAdults: number;
};
