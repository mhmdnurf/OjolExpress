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
  status?: 'open' | 'closed'; // Optional, bisa digunakan untuk status
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
  merchantImageClosed: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    opacity: 0.5,
  },
  statusTagOpen: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#10B981',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTagClosed: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTagOffline: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(107, 114, 128, 0.9)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
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
  imageContainer: {
    position: 'relative',
  },
  fallbackImageContainer: {
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSection: {
    padding: 16,
  },
  distanceTimeText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#6B7280',
  },
  distanceTimeTextClosed: {
    fontSize: 14,
    marginBottom: 8,
    color: '#9CA3AF',
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#111827',
  },
  restaurantNameClosed: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#6B7280',
  },
  cuisineType: {
    fontSize: 14,
    marginBottom: 12,
    color: '#6B7280',
  },
  cuisineTypeClosed: {
    fontSize: 14,
    marginBottom: 12,
    color: '#9CA3AF',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500',
    color: '#374151',
  },
  ratingTextClosed: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500',
    color: '#6B7280',
  },
  reviewText: {
    color: '#9CA3AF',
    fontSize: 14,
    marginLeft: 4,
  },
  promoText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    color: '#DC2626',
  },
  promoTextClosed: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    color: '#9CA3AF',
  },
  closedMessage: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 8,
    fontStyle: 'italic',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  promoTagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fallbackText: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 8,
  },
});

const MerchantItem = React.memo<MerchantItemProps>(
  ({item, index, onMerchantPress}) => {
    const [imageError, setImageError] = React.useState(false);

    // Determine status styling
    const getStatusStyle = () => {
      if (item.status === 'open') {
        return styles.statusTagOpen;
      } else if (item.status === 'closed') {
        return styles.statusTagClosed;
      } else {
        return styles.statusTagOffline;
      }
    };

    const getStatusIcon = () => {
      if (item.status === 'open') {
        return 'circle';
      } else if (item.status === 'closed') {
        return 'times-circle';
      } else {
        return 'clock';
      }
    };

    const getStatusText = () => {
      if (item.status === 'open') {
        return 'OPEN';
      } else if (item.status === 'closed') {
        return 'CLOSED';
      } else {
        return 'OFFLINE';
      }
    };

    return (
      <Animated.View
        entering={FadeInUp.delay(index * 100).duration(400)}
        className="bg-white rounded-xl border border-gray-100"
        style={styles.merchantCard}>
        <Pressable
          onPress={() => onMerchantPress(item.id)}
          android_ripple={{color: '#f3f4f6'}}>
          {/* Image Section */}
          <View style={styles.imageContainer}>
            {!imageError ? (
              <Image
                source={item.image}
                style={
                  item.status === 'closed'
                    ? styles.merchantImageClosed
                    : styles.merchantImage
                }
                className="bg-gray-200"
                onError={() => setImageError(true)}
              />
            ) : (
              <View
                style={[
                  item.status === 'closed'
                    ? styles.merchantImageClosed
                    : styles.merchantImage,
                  styles.fallbackImageContainer,
                ]}>
                <Icon name="utensils" size={40} color="#9CA3AF" />
                <Text style={styles.fallbackText}>{item.cuisine}</Text>
              </View>
            )}

            {/* Status Tag */}
            <View style={getStatusStyle()}>
              <Icon
                name={getStatusIcon()}
                size={10}
                color="#FFFFFF"
                solid={item.status === 'open'}
              />
              <Text style={styles.statusText}>{getStatusText()}</Text>
            </View>

            {/* Promo Badge */}
            {item.promo && (
              <View style={styles.promoTag}>
                <Text style={styles.promoTagText}>{item.promo}</Text>
              </View>
            )}
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            {/* Distance & Time */}
            <Text
              style={
                item.status === 'closed'
                  ? styles.distanceTimeTextClosed
                  : styles.distanceTimeText
              }>
              {item.distance} • {item.deliveryTime}
            </Text>

            {/* Restaurant Name */}
            <Text
              style={
                item.status === 'closed'
                  ? styles.restaurantNameClosed
                  : styles.restaurantName
              }
              numberOfLines={2}>
              {item.name}
            </Text>

            {/* Cuisine Type */}
            <Text
              style={
                item.status === 'closed'
                  ? styles.cuisineTypeClosed
                  : styles.cuisineType
              }
              numberOfLines={1}>
              {item.cuisine}
            </Text>

            {/* Rating */}
            <View style={styles.ratingContainer}>
              <Icon
                name="star"
                size={14}
                color={item.status === 'closed' ? '#9CA3AF' : '#F59E0B'}
                solid
              />
              <Text
                style={
                  item.status === 'closed'
                    ? styles.ratingTextClosed
                    : styles.ratingText
                }>
                {item.rating}
              </Text>
              <Text style={styles.reviewText}>(2,349 reviews)</Text>
            </View>

            {/* Promo Text */}
            {item.promo && (
              <Text
                style={
                  item.status === 'closed'
                    ? styles.promoTextClosed
                    : styles.promoText
                }
                numberOfLines={2}>
                🎉 {item.promo}
              </Text>
            )}

            {/* Closed Message */}
            {item.status === 'closed' && (
              <Text style={styles.closedMessage}>
                Opens tomorrow at 10:00 AM
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
