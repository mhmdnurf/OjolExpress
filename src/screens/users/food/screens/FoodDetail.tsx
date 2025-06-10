import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {RootStackParamList} from '../../../../types/navigationType';

type FoodDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FoodDetail'
>;

type FoodDetailRouteProp = RouteProp<RootStackParamList, 'FoodDetail'>;

interface FoodDetailProps {
  navigation: FoodDetailNavigationProp;
  route: FoodDetailRouteProp;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  merchantInfo: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  deliveryCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },
  menuSection: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 24,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  addButton: {
    backgroundColor: '#D97706',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function FoodDetail({navigation}: FoodDetailProps) {
  //   const {merchantId, merchantName} = route.params;

  // Samanko Coffee Roasters Data - Static untuk sekarang
  const samankoData = {
    id: 'samanko-coffee',
    name: 'Samanko Coffee Roasters',
    cuisine: 'Coffee & Bakery',
    rating: 4.7,
    reviewCount: 1856,
    deliveryTime: '15-20 min',
    deliveryFee: 'Rp 8.000',
    distance: '0.5 km',
    isOpen: true,
    promo: 'Free Upgrade Size untuk pembelian Large Coffee',
    address: 'Jl. Kemang Raya No. 45, Jakarta Selatan',
    description:
      'Premium coffee roaster dengan specialty single origin beans dan fresh baked goods daily',
  };

  const menuCategories = [
    {
      title: 'Signature Coffee',
      items: [
        {
          id: 1,
          name: 'Samanko Signature Blend',
          description:
            'House blend dengan notes chocolate dan caramel, medium roast',
          price: 35000,
          image: 'https://picsum.photos/200/200?random=101',
          isPopular: true,
        },
        {
          id: 2,
          name: 'Ethiopian Single Origin',
          description: 'Fruity dan floral notes, light roast dari Yirgacheffe',
          price: 42000,
          image: 'https://picsum.photos/200/200?random=102',
        },
        {
          id: 3,
          name: 'Cold Brew Coffee',
          description: 'Smooth cold brew dengan 12 jam extraction',
          price: 28000,
          image: 'https://picsum.photos/200/200?random=103',
        },
        {
          id: 4,
          name: 'Cappuccino',
          description: 'Espresso dengan steamed milk dan foam art',
          price: 32000,
          image: 'https://picsum.photos/200/200?random=104',
        },
      ],
    },
    {
      title: 'Fresh Bakery',
      items: [
        {
          id: 5,
          name: 'Croissant Butter',
          description: 'Flaky pastry dengan butter premium, fresh baked daily',
          price: 18000,
          image: 'https://picsum.photos/200/200?random=201',
        },
        {
          id: 6,
          name: 'Cinnamon Roll',
          description: 'Soft bread roll dengan cinnamon dan cream cheese glaze',
          price: 22000,
          image: 'https://picsum.photos/200/200?random=202',
          isPopular: true,
        },
        {
          id: 7,
          name: 'Banana Bread',
          description: 'Moist banana bread dengan walnuts dan chocolate chips',
          price: 25000,
          image: 'https://picsum.photos/200/200?random=203',
        },
        {
          id: 8,
          name: 'Blueberry Muffin',
          description: 'Fluffy muffin dengan fresh blueberries',
          price: 20000,
          image: 'https://picsum.photos/200/200?random=204',
        },
      ],
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Image - Coffee Shop Vibe */}
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: 'https://picsum.photos/800/400?random=coffee'}}
          style={styles.headerImage}
        />

        {/* Back Button */}
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#FFFFFF" />
        </Pressable>

        {/* Favorite Button */}
        <Pressable style={styles.favoriteButton}>
          <Icon name="heart" size={20} color="#FFFFFF" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Merchant Info */}
        <Animated.View
          entering={FadeInDown.delay(200).duration(600)}
          style={styles.merchantInfo}>
          <View className="flex-row items-start justify-between mb-3">
            <View className="flex-1 pr-4">
              <Text className="text-2xl font-bold text-gray-900 mb-1">
                {samankoData.name}
              </Text>
              <Text className="text-amber-600 text-base font-medium mb-2">
                {samankoData.cuisine}
              </Text>
              <Text className="text-gray-600 text-sm">
                {samankoData.description}
              </Text>
            </View>

            <View className="items-end">
              <View className="flex-row items-center mb-1">
                <Icon name="star" size={16} color="#F59E0B" solid />
                <Text className="text-gray-900 font-semibold ml-1 text-base">
                  {samankoData.rating}
                </Text>
              </View>
              <Text className="text-gray-500 text-sm">
                ({samankoData.reviewCount} reviews)
              </Text>
            </View>
          </View>

          {/* Promo Banner */}
          <View className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <Text className="text-amber-700 font-semibold">
              ☕ {samankoData.promo}
            </Text>
          </View>

          {/* Delivery Info */}
          <View style={styles.deliveryCard}>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Icon name="clock" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.deliveryTime}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Icon name="map-marker-alt" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.distance}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Icon name="motorcycle" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.deliveryFee}
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          {menuCategories.map((category, categoryIndex) => (
            <View key={category.title}>
              <Text style={styles.categoryTitle}>{category.title}</Text>

              {category.items.map((item, index) => (
                <Animated.View
                  key={item.id}
                  entering={FadeInDown.delay(
                    400 + categoryIndex * 200 + index * 100,
                  ).duration(600)}
                  style={styles.menuItem}>
                  <View style={{position: 'relative'}}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.menuImage}
                    />
                    {item.isPopular && (
                      <View className="absolute -top-2 -right-2 bg-red-500 px-2 py-1 rounded-full">
                        <Text className="text-white text-xs font-bold">
                          Popular
                        </Text>
                      </View>
                    )}
                  </View>

                  <View className="flex-1 ml-4 justify-between">
                    <View>
                      <Text className="text-gray-900 font-bold text-base mb-1">
                        {item.name}
                      </Text>
                      <Text
                        className="text-gray-600 text-sm mb-2"
                        numberOfLines={2}>
                        {item.description}
                      </Text>
                      <Text className="text-amber-600 font-bold text-base">
                        {formatPrice(item.price)}
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    style={styles.addButton}
                    onPress={() => console.log('Add item:', item.name)}>
                    <Icon name="plus" size={16} color="#FFFFFF" />
                  </Pressable>
                </Animated.View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
