import {CategoryItemType} from '../screens/users/food/components/CategoryItem';
import {RestaurantItemType} from '../screens/users/food/components/RestaurantItem';

export const categories: CategoryItemType[] = [
  {
    id: 0,
    name: 'Food',
    icon: 'utensils',
    color: 'bg-orange-100',
    iconColor: '#EA580C',
  },
  {
    id: 1,
    name: 'Drinks',
    icon: 'cocktail',
    color: 'bg-blue-100',
    iconColor: '#2563EB',
  },
  {
    id: 2,
    name: 'Coffee',
    icon: 'coffee',
    color: 'bg-amber-100',
    iconColor: '#D97706',
  },
  {
    id: 3,
    name: 'Desserts',
    icon: 'ice-cream',
    color: 'bg-pink-100',
    iconColor: '#EC4899',
  },
  {
    id: 4,
    name: 'Pizza',
    icon: 'pizza-slice',
    color: 'bg-yellow-100',
    iconColor: '#CA8A04',
  },
  {
    id: 5,
    name: 'Burger',
    icon: 'hamburger',
    color: 'bg-red-100',
    iconColor: '#DC2626',
  },
];

export const restaurants: RestaurantItemType[] = [
  {
    id: 1,
    name: "McDonald's",
    cuisine: 'Fast Food',
    rating: 4.5,
    deliveryTime: '15-25 min',
    deliveryFee: 'Free',
    distance: '0.8 km',
    promo: 'Buy 1 Get 1',
  },
  {
    id: 2,
    name: 'KFC',
    cuisine: 'Fast Food',
    rating: 4.3,
    deliveryTime: '20-30 min',
    deliveryFee: 'Rp 5.000',
    distance: '1.2 km',
    promo: null,
  },
  {
    id: 3,
    name: 'Pizza Hut',
    cuisine: 'Italian',
    rating: 4.4,
    deliveryTime: '25-35 min',
    deliveryFee: 'Free',
    distance: '2.1 km',
    promo: 'Free Delivery',
  },
  {
    id: 4,
    name: 'Starbucks',
    cuisine: 'Coffee & Drinks',
    rating: 4.6,
    deliveryTime: '10-20 min',
    deliveryFee: 'Rp 8.000',
    distance: '0.5 km',
    promo: null,
  },
];
