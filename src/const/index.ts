import logo from '../assets/defaultLogo.png';

export const products = [
    {
      id: 1,
      name: 'Microwave',
      price: '99.01',
      image: logo,
      description: 'product description',
      count: 0,
    },
    {
      id: 2,
      name: 'Player',
      price: '78.05',
      image: logo,
      description: 'product description',
      count: 0,
    },
    {
      id: 3,
      name: 'PC',
      price: '23.11',
      image: logo,
      description: 'product description',
      count: 0,
    },
    {
      id: 4,
      name: 'Phone',
      price: '34.11',
      image: logo,
      description: 'product description',
      count: 0,
    },
    {
      id: 5,
      name: 'TV',
      price: '55.11',
      image: logo,
      description: 'product description',
      count: 0,
    }
];

export const PRODUCT_ADDED_TO_LIST = 'PRODUCT_ADDED_TO_LIST';
export const PRODUCT_REMOVED = 'PRODUCT_REMOVED';
export const PRODUCT_NEW_ADDED = 'PRODUCT_NEW_ADDED';