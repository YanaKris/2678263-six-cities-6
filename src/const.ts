export const CountOffers = 5;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  Apartment = "apartment",
  Room = "room",
  House = "house",
  Hotel = "hotel"
}

export type CityName =
  | "Paris"
  | "Cologne"
  | "Brussels"
  | "Amsterdam"
  | "Hamburg"
  | "Dusseldorf";
