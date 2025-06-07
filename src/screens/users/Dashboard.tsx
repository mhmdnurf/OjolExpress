import React from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path, Circle, Ellipse} from 'react-native-svg';

export default function Dashboard() {
  const services = [
    {id: 1, name: 'OjolRide', icon: 'motorcycle', color: 'bg-green-500'},
    {id: 2, name: 'OjolFood', icon: 'utensils', color: 'bg-red-500'},
    {id: 3, name: 'OjolSend', icon: 'box', color: 'bg-blue-500'},
    {id: 4, name: 'OjolMart', icon: 'shopping-bag', color: 'bg-purple-500'},
    {id: 5, name: 'OjolCar', icon: 'car', color: 'bg-gray-700'},
    {id: 6, name: 'OjolPay', icon: 'wallet', color: 'bg-blue-600'},
    {id: 7, name: 'OjolClean', icon: 'broom', color: 'bg-yellow-500'},
    {id: 8, name: 'More', icon: 'th-large', color: 'bg-gray-400'},
  ];

  const promos = [
    {
      id: 1,
      title: 'Gratis Ongkir',
      subtitle: 'Min. order Rp 25.000',
      discount: '100%',
      color: 'bg-red-500',
    },
    {
      id: 2,
      title: 'Diskon Ride',
      subtitle: 'Max discount Rp 10.000',
      discount: '50%',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Cashback',
      subtitle: 'OjolPay only',
      discount: '20%',
      color: 'bg-blue-500',
    },
  ];

  return (
    <>
      {Platform.OS === 'android' ? (
        <StatusBar
          barStyle="light-content"
          backgroundColor="#EF4444"
          translucent={false}
        />
      ) : (
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
      )}
      <SafeAreaView className="bg-red-600">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View className="bg-red-600 px-6 py-4">
            {/* Top Bar */}
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-white/80 text-sm">Good morning</Text>
                <Text className="text-white text-lg font-semibold">
                  Muhammad Nur
                </Text>
              </View>
              <View className="flex-row items-center space-x-3">
                <TouchableOpacity className="relative">
                  <Icon name="bell" size={20} color="#fff" />
                  <View className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="w-8 h-8 bg-white/20 rounded-full items-center justify-center">
                    <Text className="text-white font-bold text-sm">M</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Location */}
            <View className="flex-row items-center mb-6">
              <Icon name="map-marker-alt" size={16} color="#fff" />
              <Text className="text-white ml-2 text-base font-medium">
                Tanjungpinang, Indonesia
              </Text>
              <Icon
                name="chevron-down"
                size={12}
                color="#fff"
                className="ml-1"
              />
            </View>

            {/* Search Bar */}
            <View className="bg-white/10 rounded-xl px-4 py-3 mb-6">
              <View className="flex-row items-center">
                <Icon name="search" size={16} color="#fff" />
                <TextInput
                  placeholder="Mau kemana hari ini?"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  className="flex-1 text-white ml-3"
                />
              </View>
            </View>

            {/* Promo Card with SVG */}
            <View className="bg-white/10 rounded-2xl p-4 mb-8">
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text className="text-2xl text-white font-bold">
                    Promo gratis ongkir 🎉
                  </Text>
                  <Text className="text-white/80 text-sm mt-1 mb-4">
                    Hemat lebih banyak dengan promo spesial hari ini!
                  </Text>
                  <Pressable>
                    <View className="bg-white rounded-full px-5 py-2 self-start">
                      <Text className="text-red-500 font-semibold">
                        Pesan Sekarang
                      </Text>
                    </View>
                  </Pressable>
                </View>

                {/* SVG Illustration */}
                <View className="ml-4">
                  <Svg width="100" height="100" viewBox="0 0 120 120">
                    <Circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="rgba(255,255,255,0.1)"
                    />
                    <Path
                      d="M30 70 Q35 65 45 65 L75 65 Q80 65 85 70"
                      stroke="#fff"
                      strokeWidth="3"
                      fill="none"
                    />
                    <Circle
                      cx="35"
                      cy="80"
                      r="12"
                      stroke="#fff"
                      strokeWidth="3"
                      fill="rgba(255,255,255,0.2)"
                    />
                    <Circle
                      cx="85"
                      cy="80"
                      r="12"
                      stroke="#fff"
                      strokeWidth="3"
                      fill="rgba(255,255,255,0.2)"
                    />
                    <Path
                      d="M45 60 Q50 55 55 60"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                    />
                    <Ellipse cx="65" cy="62" rx="8" ry="4" fill="#fff" />
                    <Path
                      d="M75 50 L85 50 L85 65 L75 65 Z"
                      fill="#fff"
                      opacity="0.8"
                    />
                    <Path
                      d="M15 40 L25 40 M10 50 L22 50 M15 60 L25 60"
                      stroke="#fff"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  </Svg>
                </View>
              </View>
            </View>
          </View>

          {/* Balance Card */}
          <View className="mx-6 -mt-8 mb-6">
            <View className="bg-white rounded-2xl p-6 shadow-sm">
              <View className="flex-row items-center justify-between mb-4">
                <View>
                  <Text className="text-gray-500 text-sm">OjolPay Balance</Text>
                  <Text className="text-gray-800 text-2xl font-bold">
                    Rp 127,500
                  </Text>
                </View>
                <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-lg">
                  <Text className="text-white font-medium">Top Up</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between">
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="plus" size={14} color="#EF4444" />
                  <Text className="text-red-500 ml-2 text-sm font-medium">
                    Add Money
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="qrcode" size={14} color="#EF4444" />
                  <Text className="text-red-500 ml-2 text-sm font-medium">
                    Scan & Pay
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="exchange-alt" size={14} color="#EF4444" />
                  <Text className="text-red-500 ml-2 text-sm font-medium">
                    Transfer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Services Grid */}
          <View className="bg-white mx-6 rounded-2xl p-6 mb-6">
            <Text className="text-gray-800 font-bold text-lg mb-4">
              Services
            </Text>
            <View className="flex-row flex-wrap justify-between">
              {services.map(service => (
                <TouchableOpacity
                  key={service.id}
                  className="items-center mb-6"
                  style={{width: '22%'}}>
                  <View
                    className={`w-12 h-12 ${service.color} rounded-xl items-center justify-center mb-2`}>
                    <Icon name={service.icon} size={20} color="#fff" />
                  </View>
                  <Text className="text-gray-700 text-xs text-center font-medium">
                    {service.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Promotions */}
          <View className="px-6 mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-gray-800 font-bold text-lg">
                Special Offers
              </Text>
              <TouchableOpacity>
                <Text className="text-red-500 font-medium">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-3">
                {promos.map(promo => (
                  <TouchableOpacity
                    key={promo.id}
                    className={`${promo.color} rounded-2xl p-4 w-64 relative overflow-hidden`}>
                    <View className="absolute top-2 right-2 bg-white/20 rounded-full px-2 py-1">
                      <Text className="text-white text-xs font-bold">
                        {promo.discount}
                      </Text>
                    </View>
                    <Text className="text-white font-bold text-lg mb-1">
                      {promo.title}
                    </Text>
                    <Text className="text-white/80 text-sm mb-3">
                      {promo.subtitle}
                    </Text>
                    <View className="bg-white/20 self-start px-3 py-1 rounded-full">
                      <Text className="text-white text-xs font-medium">
                        Claim Now
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Quick Actions */}
          <View className="px-6 mb-6">
            <Text className="text-gray-800 font-bold text-lg mb-3">
              Quick Access
            </Text>
            <View className="flex-row space-x-3">
              <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
                <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mb-2">
                  <Icon name="history" size={20} color="#EF4444" />
                </View>
                <Text className="text-gray-700 font-medium text-sm">
                  History
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
                <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mb-2">
                  <Icon name="heart" size={20} color="#EF4444" />
                </View>
                <Text className="text-gray-700 font-medium text-sm">
                  Favorites
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
                <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mb-2">
                  <Icon name="headset" size={20} color="#EF4444" />
                </View>
                <Text className="text-gray-700 font-medium text-sm">Help</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
