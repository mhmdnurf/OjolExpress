import {useState, useCallback, useMemo} from 'react';
import {categories, restaurants} from '../constants/food';
import {RestaurantItemType} from '../screens/users/food/components/RestaurantItem';

export const useFoodScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelect = useCallback((id: number) => {
    setSelectedCategory(id);
  }, []);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const selectedCategoryName = categories
        .find(cat => cat.id === selectedCategory)
        ?.name.toLowerCase();
      if (selectedCategoryName === 'food') {
        return true;
      }
      return restaurant.cuisine
        .toLowerCase()
        .includes(selectedCategoryName || '');
    });
  }, [selectedCategory]);

  const renderRestaurantItem = useCallback(
    (item: RestaurantItemType, index: number) => ({item, index}),
    [],
  );

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredRestaurants,
    renderRestaurantItem,
    categories,
  };
};
