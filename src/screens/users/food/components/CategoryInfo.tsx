import React from 'react';
import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

type CategoryInfoProps = {
  categories: Array<{id: number; name: string; image: ImageSourcePropType}>;
  selectedCategory: number;
  filteredMerchants: Array<any>;
};

const styles = StyleSheet.create({
  categoryImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});

export default function CategoryInfo({
  categories,
  selectedCategory,
  filteredMerchants,
}: CategoryInfoProps) {
  const selectedCategoryData = categories.find(
    cat => cat.id === selectedCategory,
  );

  return (
    <>
      {/* Selected Category Info */}
      <View className="px-6 mb-6">
        <Animated.View
          className="bg-gray-50 rounded-2xl p-4"
          entering={FadeInDown.duration(300).springify()}>
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mr-3">
              {selectedCategoryData?.image && (
                <Image
                  source={selectedCategoryData.image}
                  style={styles.categoryImage}
                />
              )}
            </View>
            <View>
              <Text className="text-gray-900 font-semibold text-base">
                {selectedCategoryData?.name || 'Food'}
              </Text>
              <Text className="text-gray-500 text-sm">
                {filteredMerchants.length} tempat makanan siap melayani kamu
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
}
