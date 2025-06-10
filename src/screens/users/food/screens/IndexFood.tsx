import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import StatusBar from '../../../../components/common/StatusBar';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import CategoryInfo from '../components/CategoryInfo';
import MerchantItem from '../components/MerchantItem';
import CategoryItem from '../components/CategoryItem';
import CategorySeparator from '../components/CategorySeparator';
import {useFoodScreen} from '../../../../hooks/useFoodScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigationType';

type IndexNavigationProps = StackNavigationProp<
  RootStackParamList,
  'IndexFood'
>;

interface IndexFoodProps {
  navigation: IndexNavigationProps;
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: '#DC2626',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#DC2626',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  itemSeparator: {
    width: 12,
  },
});

export default function IndexFood({navigation}: IndexFoodProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredMerchants,
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

  const renderMerchantItem = React.useCallback(
    ({item, index}: {item: any; index: number}) => (
      <MerchantItem
        item={item}
        index={index}
        onMerchantPress={merchantId => {
          navigation.navigate('FoodDetail', {
            merchantId: merchantId,
            merchantName: item.name,
            merchantImage: item.image,
          });
        }}
      />
    ),
    [navigation],
  );

  const keyExtractor = React.useCallback(
    (item: (typeof categories)[0]) => item.id.toString(),
    [],
  );

  const merchantKeyExtractor = React.useCallback(
    (item: any) => item.id.toString(),
    [],
  );

  const ItemSeparator = React.useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        <View className="mb-4">
          <Header onClosePress={() => navigation.goBack()} />
          <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <CategoryList
            categories={categories}
            renderCategoryItem={renderCategoryItem}
            keyExtractor={keyExtractor}
            CategorySeparator={CategorySeparator}
          />

          <CategoryInfo
            categories={categories}
            selectedCategory={selectedCategory}
            filteredMerchants={filteredMerchants}
          />

          <View>
            <Text className="text-gray-900 text-lg font-bold mb-4 px-6">
              Lagi Hits, Cobain Yuk!
            </Text>

            <FlatList
              data={filteredMerchants}
              renderItem={renderMerchantItem}
              keyExtractor={merchantKeyExtractor}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
              ItemSeparatorComponent={ItemSeparator}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
