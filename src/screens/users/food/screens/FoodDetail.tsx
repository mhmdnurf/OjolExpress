import React from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {RootStackParamList} from '../../../../types/navigationType';
import StatusBar from '../../../../components/common/StatusBar';

type FoodDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FoodDetail'
>;

type FoodDetailRouteProp = RouteProp<RootStackParamList, 'FoodDetail'>;

interface FoodDetailProps {
  navigation: FoodDetailNavigationProp;
  route: FoodDetailRouteProp;
}

export default function FoodDetail({navigation, route}: FoodDetailProps) {
  const {merchantId, merchantName, merchantImage} = route.params;

  // Samanko Coffee Roasters Data - Static untuk sekarang
  const samankoData = {
    id: merchantId || 4,
    name: merchantName || 'Samanko Coffee Roasters',
    image: merchantImage,
    categories: ['coffee', 'beverages', 'bakery', 'specialty-coffee'],
    cuisine: 'Specialty Coffee & Bakery',
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
    operatingHours: '06:00 - 22:00',
  };

  const menuCategories = [
    {
      title: 'Signature Coffee',
      icon: 'coffee',
      items: [
        {
          id: 1,
          name: 'Samanko Signature Blend',
          description:
            'House blend dengan notes chocolate dan caramel, medium roast',
          price: 35000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=101',
          isPopular: true,
          isAvailable: true,
          tags: ['signature', 'medium-roast'],
        },
        {
          id: 2,
          name: 'Ethiopian Single Origin',
          description: 'Fruity dan floral notes, light roast dari Yirgacheffe',
          price: 42000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=102',
          isPopular: false,
          isAvailable: true,
          tags: ['single-origin', 'light-roast', 'fruity'],
        },
        {
          id: 3,
          name: 'Cold Brew Coffee',
          description: 'Smooth cold brew dengan 12 jam extraction',
          price: 28000,
          originalPrice: 32000,
          image: 'https://picsum.photos/200/200?random=103',
          isPopular: false,
          isAvailable: true,
          tags: ['cold-brew', 'smooth'],
        },
        {
          id: 4,
          name: 'Cappuccino',
          description: 'Espresso dengan steamed milk dan foam art',
          price: 32000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=104',
          isPopular: false,
          isAvailable: true,
          tags: ['espresso', 'milk', 'latte-art'],
        },
      ],
    },
    {
      title: 'Fresh Bakery',
      icon: 'bread-slice',
      items: [
        {
          id: 5,
          name: 'Croissant Butter',
          description: 'Flaky pastry dengan butter premium, fresh baked daily',
          price: 18000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=201',
          isPopular: false,
          isAvailable: true,
          tags: ['pastry', 'butter', 'fresh'],
        },
        {
          id: 6,
          name: 'Cinnamon Roll',
          description: 'Soft bread roll dengan cinnamon dan cream cheese glaze',
          price: 22000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=202',
          isPopular: true,
          isAvailable: true,
          tags: ['sweet', 'cinnamon', 'cream-cheese'],
        },
        {
          id: 7,
          name: 'Banana Bread',
          description: 'Moist banana bread dengan walnuts dan chocolate chips',
          price: 25000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=203',
          isPopular: false,
          isAvailable: true,
          tags: ['banana', 'walnut', 'chocolate'],
        },
        {
          id: 8,
          name: 'Blueberry Muffin',
          description: 'Fluffy muffin dengan fresh blueberries',
          price: 20000,
          originalPrice: null,
          image: 'https://picsum.photos/200/200?random=204',
          isPopular: false,
          isAvailable: false, // Sold out
          tags: ['muffin', 'blueberry', 'fluffy'],
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      coffee: '#D97706',
      beverages: '#2563EB',
      bakery: '#EC4899',
      'specialty-coffee': '#92400E',
    };
    return colors[category] || '#6B7280';
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {/* Header Image */}
      <View className="relative">
        <Image
          source={samankoData.image}
          className="w-full h-52 bg-gray-200"
          resizeMode="cover"
        />

        {/* Header Buttons */}
        <View className="absolute top-12 left-0 right-0 flex-row justify-between px-4 z-10">
          <Pressable
            className="w-10 h-10 rounded-full bg-black/50 items-center justify-center"
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#FFFFFF" />
          </Pressable>

          <Pressable className="w-10 h-10 rounded-full bg-black/50 items-center justify-center">
            <Icon name="heart" size={20} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Merchant Info Card */}
        <Animated.View
          entering={FadeInDown.delay(200).duration(600)}
          className="bg-white rounded-t-5xl -mt-5 px-5 pt-8 pb-5">
          {/* Restaurant Header */}
          <View className="flex-row items-start justify-between mb-4">
            <View className="flex-1 pr-4">
              <Text className="text-2xl font-bold text-gray-900 mb-2">
                {samankoData.name}
              </Text>
              <Text className="text-amber-600 text-base font-medium mb-2">
                {samankoData.cuisine}
              </Text>
              <Text className="text-gray-600 text-sm mb-4">
                {samankoData.description}
              </Text>

              {/* Categories Tags */}
              <View className="flex-row flex-wrap">
                {samankoData.categories.map(category => (
                  <View
                    key={category}
                    className="bg-gray-100 rounded-2xl px-3 py-1.5 mr-2 mb-2">
                    <Text
                      className="text-xs font-medium"
                      style={{color: getCategoryColor(category)}}>
                      #{category}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Rating & Status */}
            <View className="items-end">
              <View className="flex-row items-center mb-1">
                <Icon name="star" size={16} color="#F59E0B" solid />
                <Text className="text-gray-900 font-semibold ml-1 text-base">
                  {samankoData.rating}
                </Text>
              </View>
              <Text className="text-gray-500 text-sm mb-2">
                ({samankoData.reviewCount} reviews)
              </Text>

              {/* Operating Hours */}
              <View className="flex-row items-center">
                <Icon
                  name="clock"
                  size={12}
                  color={samankoData.isOpen ? '#10B981' : '#EF4444'}
                />
                <Text
                  className={`text-xs ml-1 font-medium ${
                    samankoData.isOpen ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {samankoData.isOpen ? 'Open' : 'Closed'} •{' '}
                  {samankoData.operatingHours}
                </Text>
              </View>
            </View>
          </View>

          {/* Promo Banner */}
          <View className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <Text className="text-amber-700 font-semibold">
              ☕ {samankoData.promo}
            </Text>
          </View>

          {/* Delivery Info */}
          <View className="bg-gray-50 rounded-xl p-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <Icon name="clock" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.deliveryTime}
                </Text>
              </View>

              <View className="flex-row items-center flex-1 justify-center">
                <Icon name="map-marker-alt" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.distance}
                </Text>
              </View>

              <View className="flex-row items-center flex-1 justify-end">
                <Icon name="motorcycle" size={16} color="#6B7280" />
                <Text className="text-gray-700 ml-2 font-medium">
                  {samankoData.deliveryFee}
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Menu Section */}
        <View className="px-5 pb-24">
          {menuCategories.map((category, categoryIndex) => (
            <View key={category.title} className="mb-6">
              {/* Category Header */}
              <View className="flex-row items-center mb-4">
                <Icon name={category.icon} size={18} color="#D97706" />
                <Text className="text-lg font-bold text-gray-900 ml-2">
                  {category.title}
                </Text>
              </View>

              {/* Menu Items */}
              {category.items.map((item, index) => (
                <Animated.View
                  key={item.id}
                  entering={FadeInDown.delay(
                    400 + categoryIndex * 200 + index * 100,
                  ).duration(600)}>
                  <View
                    className={`flex-row bg-white rounded-xl p-4 mb-3 ${
                      item.isAvailable
                        ? 'shadow-sm border border-gray-100'
                        : 'opacity-60 shadow-sm border border-gray-100'
                    }`}>
                    {/* Menu Image */}
                    <View className="relative">
                      <Image
                        source={{uri: item.image}}
                        className="w-20 h-20 rounded-lg bg-gray-200"
                        resizeMode="cover"
                      />

                      {/* Popular Badge */}
                      {item.isPopular && (
                        <View className="absolute -top-2 -right-2 bg-red-500 rounded-xl px-2 py-1">
                          <Text className="text-white text-xs font-bold">
                            Popular
                          </Text>
                        </View>
                      )}

                      {/* Sold Out Overlay */}
                      {!item.isAvailable && (
                        <View className="absolute inset-0 bg-black/50 rounded-lg items-center justify-center">
                          <Text className="text-white text-xs font-bold">
                            Sold Out
                          </Text>
                        </View>
                      )}
                    </View>

                    {/* Menu Content */}
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

                        {/* Price */}
                        <View className="flex-row items-center">
                          <Text className="text-amber-600 font-bold text-base">
                            {formatPrice(item.price)}
                          </Text>
                          {item.originalPrice && (
                            <Text className="text-gray-400 text-sm ml-2 line-through">
                              {formatPrice(item.originalPrice)}
                            </Text>
                          )}
                        </View>
                      </View>
                    </View>

                    {/* Add Button */}
                    <Pressable
                      className={`rounded-lg px-4 py-2 items-center justify-center ${
                        item.isAvailable ? 'bg-amber-600' : 'bg-gray-400'
                      }`}
                      disabled={!item.isAvailable}
                      onPress={() => console.log('Add item:', item.name)}>
                      <Icon
                        name={item.isAvailable ? 'plus' : 'times'}
                        size={16}
                        color="#FFFFFF"
                      />
                    </Pressable>
                  </View>
                </Animated.View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
