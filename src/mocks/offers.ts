import { Offer } from '../type/offer';
import { OfferType } from '../const';
const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful apartment in Amsterdam',
    type: OfferType.Apartment,
    price: 120,

    previewImage: 'img/apartment-01.jpg',

    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },

    isFavorite: false,
    isPremium: true,
    rating: 4.5,

    description: 'A quiet cozy and picturesque apartment.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen'],

    host: {
      name: 'Oliver',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },

    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],

    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Beautiful room in Amsterdam',
    type: OfferType.Room,
    price: 70,

    previewImage: 'img/apartment-small-03.jpg',

    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },

    isFavorite: true,
    isPremium: true,
    rating: 3.0,

    description: 'Small but very cozy room in the center.',
    bedrooms: 1,
    goods: ['Wi-Fi'],

    host: {
      name: 'Olivia',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },

    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],

    maxAdults: 1,
  },
  {
    id: '3',
    title: 'Spacious house in Amsterdam',
    type: OfferType.House,
    price: 270,

    previewImage: 'img/apartment-small-04.jpg',

    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },

    isFavorite: true,
    isPremium: true,
    rating: 4.5,

    description: 'Large house perfect for family vacations.',
    bedrooms: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Dishwasher',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
    ],

    host: {
      name: 'Max',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },

    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],

    maxAdults: 6,
  },
  {
    id: '4',
    title: 'Modern apartment in Amsterdam',
    type: OfferType.Apartment,
    price: 150,

    previewImage: 'img/apartment-02.jpg',

    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },

    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },

    isFavorite: true,
    isPremium: false,
    rating: 4.4,

    description: 'Modern apartment near the city center.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Washing machine'],

    host: {
      name: 'Sophie',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false,
    },

    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],

    maxAdults: 3,
  },
  {
    id: '5',
    title: 'Charming studio in Le Marais',
    type: OfferType.Apartment,
    price: 95,

    previewImage: 'img/apartment-02.jpg',

    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 12,
      },
    },

    location: {
      latitude: 48.85837,
      longitude: 2.3639,
      zoom: 12,
    },

    isFavorite: false,
    isPremium: true,
    rating: 4.7,

    description: 'Cozy studio in the heart of historic Le Marais district.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine'],

    host: {
      name: 'Camille',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },

    images: [],

    maxAdults: 2,
  },
  {
    id: '6',
    title: 'Elegant room near Eiffel Tower',
    type: OfferType.Room,
    price: 110,

    previewImage: 'img/apartment-02.jpg',

    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 12,
      },
    },

    location: {
      latitude: 48.858844,
      longitude: 2.294481,
      zoom: 12,
    },

    isFavorite: true,
    isPremium: false,
    rating: 4.2,

    description: 'Bright room with a view, walking distance to Eiffel Tower.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Towels'],

    host: {
      name: 'Antoine',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false,
    },

    images: [],

    maxAdults: 1,
  },
];
