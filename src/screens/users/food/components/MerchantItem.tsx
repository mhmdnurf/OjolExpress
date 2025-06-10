import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {FadeInUp} from 'react-native-reanimated';

// Define the restaurant item type
export interface MerchantItemType {
  id: number;
  name: string;
  categories: string[]; // Tambah ini
  cuisine: string; // Keep untuk display
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  distance: string;
  promo: string | null;
  image?: ImageSourcePropType;
}

interface MerchantItemProps {
  item: MerchantItemType;
  index: number;
  onMerchantPress: (merchantId: number) => void;
}

const styles = StyleSheet.create({
  merchantCard: {
    width: 300,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  merchantImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  priceTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  promoTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#DC2626',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});

const MerchantItem = React.memo<MerchantItemProps>(
  ({item, index, onMerchantPress}) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <Animated.View
        entering={FadeInUp.delay(index * 100).duration(400)}
        className="bg-white rounded-xl border border-gray-100"
        style={styles.merchantCard}>
        <Pressable
          onPress={() => onMerchantPress(item.id)}
          android_ripple={{color: '#f3f4f6'}}>
          {/* Image Section */}
          <View className="relative">
            {!imageError ? (
              <Image
                source={item.image}
                style={styles.merchantImage}
                className="bg-gray-200"
                onError={() => setImageError(true)}
              />
            ) : (
              <View
                style={styles.merchantImage}
                className="bg-gray-200 items-center justify-center">
                <Icon name="utensils" size={40} color="#9CA3AF" />
                <Text className="text-gray-500 text-xs mt-2">
                  {item.cuisine}
                </Text>
              </View>
            )}

            {/* Price/Delivery Fee Tag */}
            <View style={styles.priceTag}>
              <Text className="text-white text-sm font-bold">
                {item.deliveryFee}
              </Text>
            </View>

            {/* Promo Badge */}
            {item.promo && (
              <View style={styles.promoTag}>
                <Text className="text-white text-xs font-bold">PROMO</Text>
              </View>
            )}
          </View>

          {/* Info Section */}
          <View className="p-4">
            {/* Distance & Time */}
            <Text className="text-gray-500 text-sm mb-2">
              {item.distance} • {item.deliveryTime}
            </Text>

            {/* Restaurant Name */}
            <Text
              className="text-gray-900 font-bold text-lg mb-2"
              numberOfLines={2}>
              {item.name}
            </Text>

            {/* Cuisine Type */}
            <Text className="text-gray-500 text-sm mb-3" numberOfLines={1}>
              {item.cuisine}
            </Text>

            {/* Rating */}
            <View className="flex-row items-center">
              <Icon name="star" size={14} color="#F59E0B" solid />
              <Text className="text-gray-700 text-base ml-2 font-medium">
                {item.rating}
              </Text>
              <Text className="text-gray-400 text-sm ml-1">
                (2,349 reviews)
              </Text>
            </View>

            {/* Promo Text */}
            {item.promo && (
              <Text
                className="text-red-600 text-sm font-medium mt-3"
                numberOfLines={2}>
                🎉 {item.promo}
              </Text>
            )}
          </View>
        </Pressable>
      </Animated.View>
    );
  },
);

MerchantItem.displayName = 'MerchantItem';

export default MerchantItem;
