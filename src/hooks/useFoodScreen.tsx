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
    let filtered = merchants;

    // Filter by category using categories array
    const selectedCategoryName = categories
      .find(cat => cat.id === selectedCategory)
      ?.name.toLowerCase();

    // Mapping category display name ke internal tags
    const categoryToTagsMap: Record<string, string[]> = {
      food: ['food', 'fast-food', 'pizza', 'italian'],
      drinks: ['beverages', 'coffee', 'juice', 'smoothies'], // drinks -> beverages
      coffee: ['coffee', 'specialty-coffee'],
      desserts: ['desserts', 'ice-cream', 'bakery'],
      pizza: ['pizza', 'italian'],
      burger: ['burger', 'fast-food'],
    };

    const allowedTags = categoryToTagsMap[selectedCategoryName || ''];

    if (allowedTags && allowedTags.length > 0) {
      filtered = filtered.filter(merchant =>
        allowedTags.some(
          tag => merchant.categories.includes(tag), // Menggunakan categories array
        ),
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        merchant =>
          merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          merchant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
          merchant.categories.some(category =>
            category.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

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
