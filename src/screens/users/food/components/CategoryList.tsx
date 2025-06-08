import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

type CategoryListProps = {
  categories: Array<any>;
  renderCategoryItem: ({item}: {item: any}) => React.ReactElement;
  keyExtractor: (item: any) => string;
  CategorySeparator?: React.ComponentType;
};

export default function CategoryList({
  categories,
  renderCategoryItem,
  keyExtractor,
  CategorySeparator,
}: CategoryListProps) {
  return (
    <>
      {/* Categories FlatList */}
      <View className="py-6">
        <View className="px-6 mb-4">
          <Text className="text-gray-900 text-lg font-bold mb-1">
            Categories
          </Text>
          <Text className="text-gray-500 text-sm">
            What would you like to eat today?
          </Text>
        </View>

        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryListContent}
          ItemSeparatorComponent={CategorySeparator}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // FlatList styles
  categoryListContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
