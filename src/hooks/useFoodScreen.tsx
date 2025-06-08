import {useState, useCallback, useMemo} from 'react';
import {categories, merchants} from '../data/food';
import {MerchantItemType} from '../screens/users/food/components/MerchantItem';

export const useFoodScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelect = useCallback((id: number) => {
    setSelectedCategory(id);
  }, []);

  const filteredMerchants = useMemo(() => {
    return merchants.filter(merchant => {
      const selectedCategoryName = categories
        .find(cat => cat.id === selectedCategory)
        ?.name.toLowerCase();
      if (selectedCategoryName === 'food') {
        return true;
      }
      return merchant.cuisine
        .toLowerCase()
        .includes(selectedCategoryName || '');
    });
  }, [selectedCategory]);

  const renderMerchantItem = useCallback(
    (item: MerchantItemType, index: number) => ({item, index}),
    [],
  );

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredMerchants,
    renderMerchantItem,
    categories,
  };
};
