import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {FadeInUp} from 'react-native-reanimated';

// Define the restaurant item type
export interface MerchantItemType {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  distance: string;
  promo: string | null;
}

interface MerchantItemProps {
  item: MerchantItemType;
  index: number;
  onMerchantPress: (merchantId: number) => void;
}

const styles = StyleSheet.create({
  restaurantCard: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

const MerchantItem = React.memo<MerchantItemProps>(
  ({item, index, onMerchantPress}) => {
    return (
      <Animated.View
        entering={FadeInUp.delay(index * 100).duration(400)}
        className="bg-white rounded-2xl p-4 mb-4 border border-gray-100"
        style={styles.restaurantCard}>
        <Pressable
          className="flex-row"
          onPress={() => onMerchantPress(item.id)}>
          <View className="relative">
            <View className="w-20 h-20 rounded-2xl bg-gray-100 items-center justify-center">
              <Text className="text-gray-500 font-bold text-xl">
                {item.name.charAt(0)}
              </Text>
            </View>
            {item.promo && (
              <View className="absolute -top-2 -right-2 bg-red-500 rounded-full px-2 py-1">
                <Text className="text-white text-xs font-bold">PROMO</Text>
              </View>
            )}
          </View>

          <View className="flex-1 ml-4">
            <View className="flex-row items-start justify-between mb-1">
              <Text className="text-gray-900 font-bold text-lg flex-1">
                {item.name}
              </Text>
              <View className="flex-row items-center ml-2">
                <Icon name="star" size={14} color="#F59E0B" />
                <Text className="text-gray-600 text-sm ml-1 font-medium">
                  {item.rating}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 text-sm mb-3">{item.cuisine}</Text>

            {item.promo && (
              <View className="bg-red-50 rounded-lg px-3 py-1 mb-3 self-start">
                <Text className="text-red-600 text-xs font-medium">
                  {item.promo}
                </Text>
              </View>
            )}

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Icon name="clock" size={12} color="#6B7280" />
                <Text className="text-gray-500 text-xs ml-1">
                  {item.deliveryTime}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Icon name="map-marker-alt" size={12} color="#6B7280" />
                <Text className="text-gray-500 text-xs ml-1">
                  {item.distance}
                </Text>
              </View>

              <Text
                className={`text-xs font-semibold ${
                  item.deliveryFee === 'Free'
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`}>
                {item.deliveryFee}
              </Text>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  },
);

MerchantItem.displayName = 'MerchantItem';

export default MerchantItem;
