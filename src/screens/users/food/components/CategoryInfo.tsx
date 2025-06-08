import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {FadeInDown} from 'react-native-reanimated';

type CategoryInfoProps = {
  categories: Array<{id: number; name: string; icon: string}>;
  selectedCategory: number;
  filteredRestaurants: Array<any>;
};
export default function CategoryInfo({
  categories,
  selectedCategory,
  filteredRestaurants,
}: CategoryInfoProps) {
  return (
    <>
      {/* Selected Category Info */}
      <View className="px-6 mb-6">
        <Animated.View
          className="bg-gray-50 rounded-2xl p-4"
          entering={FadeInDown.duration(300).springify()}>
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mr-3">
              <Icon
                name={
                  categories.find(cat => cat.id === selectedCategory)?.icon ||
                  'utensils'
                }
                size={16}
                color="#DC2626"
              />
            </View>
            <View>
              <Text className="text-gray-900 font-semibold text-base">
                {categories.find(cat => cat.id === selectedCategory)?.name ||
                  'Food'}
              </Text>
              <Text className="text-gray-500 text-sm">
                {filteredRestaurants.length} restaurants available
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
}
