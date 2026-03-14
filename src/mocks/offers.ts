import { Offer } from '../type/offer';
import { OfferType } from '../const';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful apartment in Amsterdam',
    type: OfferType.Apartment,
    price: 120,

    previewImage: 'https://url-to-image/image.png',

    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },

    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },

    isFavorite: false,
    isPremium: true,
    rating: 4.5,

    description: 'A quiet cozy and picturesque apartment.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen'],

    host: {
      name: 'Oliver',
      avatarUrl: 'https://url-to-image/avatar.png',
      isPro: true,
    },

    images: [
      'https://url-to-image/image1.png',
      'https://url-to-image/image2.png',
    ],

    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Beautiful room in Paris',
    type: OfferType.Room,
    price: 70,

    previewImage: 'https://url-to-image/image.png',

    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 10,
      },
    },

    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10,
    },

    isFavorite: true,
    isPremium: true,
    rating: 3.5,

    description: 'Small but very cozy room in the center.',
    bedrooms: 1,
    goods: ['Wi-Fi'],

    host: {
      name: 'Olivia',
      avatarUrl: 'https://url-to-image/avatar.png',
      isPro: true,
    },

    images: ['https://url-to-image/image1.png'],

    maxAdults: 1,
  },
  {
    id: '3',
    title: 'Spacious house in Dusseldorf',
    type: OfferType.House,
    price: 270,

    previewImage: 'https://url-to-image/image.png',

    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 10,
      },
    },

    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10,
    },

    isFavorite: true,
    isPremium: true,
    rating: 3.5,

    description: 'Large house perfect for family vacations.',
    bedrooms: 4,
    goods: ['Wi-Fi'],

    host: {
      name: 'Max',
      avatarUrl: 'https://url-to-image/avatar.png',
      isPro: true,
    },

    images: ['https://url-to-image/image1.png'],

    maxAdults: 6,
  },
  {
  id: '4',
  title: 'Modern apartment in Brussels',
  type: OfferType.Apartment,
  price: 150,

  previewImage: 'https://url-to-image/image.png',

  city: {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 10
    }
  },

  location: {
    latitude: 50.8503,
    longitude: 4.3517,
    zoom: 10
  },

  isFavorite: true,
  isPremium: false,
  rating: 4.4,

  description: 'Modern apartment near the city center.',
  bedrooms: 2,
  goods: ['Wi-Fi', 'Washing machine'],

  host: {
    name: 'Sophie',
    avatarUrl: 'https://url-to-image/avatar.png',
    isPro: false
  },

  images: [
    'https://url-to-image/image1.png'
  ],

  maxAdults: 3
}
];
