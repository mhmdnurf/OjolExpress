import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import StatusBar from '../../../components/common/StatusBar';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import CategoryInfo from './components/CategoryInfo';
import MerchantItem from './components/MerchantItem';
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

  const keyExtractor = React.useCallback(
    (item: (typeof categories)[0]) => item.id.toString(),
    [],
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
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

            <View className="px-6">
              <Text className="text-gray-900 text-lg font-bold mb-4">
                Lagi Hits, Cobain Yuk!
              </Text>

              {filteredMerchants.map((item, index) => (
                <MerchantItem
                  key={item.id}
                  item={item}
                  index={index}
                  onMerchantPress={() => {}}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
