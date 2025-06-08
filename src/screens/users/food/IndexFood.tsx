import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import StatusBar from '../../../components/common/StatusBar';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import CategoryInfo from './components/CategoryInfo';
import RestaurantItem from './components/RestaurantItem';
import CategoryItem from './components/CategoryItem';
import CategorySeparator from './components/CategorySeparator';
import {useFoodScreen} from '../../../hooks/useFoodScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types/navigationType';

type IndexNavigationProps = StackNavigationProp<
  RootStackParamList,
  'IndexFood'
>;

interface IndexFoodProps {
  navigation: IndexNavigationProps;
}

export default function IndexFood({navigation}: IndexFoodProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredRestaurants,
    categories,
  } = useFoodScreen();

  const renderCategoryItem = React.useCallback(
    ({item}: {item: (typeof categories)[0]}) => (
      <CategoryItem
        item={item}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
    ),
    [selectedCategory, handleCategorySelect],
  );

  const keyExtractor = React.useCallback(
    (item: (typeof categories)[0]) => item.id.toString(),
    [],
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView className="bg-red-600">
        <View className="mb-4">
          <Header onClosePress={() => navigation.goBack()} />
          <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="bg-white min-h-screen">
          <CategoryList
            categories={categories}
            renderCategoryItem={renderCategoryItem}
            keyExtractor={keyExtractor}
            CategorySeparator={CategorySeparator}
          />

          <CategoryInfo
            categories={categories}
            selectedCategory={selectedCategory}
            filteredRestaurants={filteredRestaurants}
          />

          <View className="px-6">
            <Text className="text-gray-900 text-lg font-bold mb-4">
              Recommended for you
            </Text>

            {filteredRestaurants.map((item, index) => (
              <RestaurantItem key={item.id} item={item} index={index} />
            ))}
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
