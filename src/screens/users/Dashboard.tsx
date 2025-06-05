import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

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
      title: 'Free Delivery',
      subtitle: 'Min. order Rp 25.000',
      color: 'bg-red-500',
    },
    {
      id: 2,
      title: '50% Off Ride',
      subtitle: 'Max discount Rp 10.000',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Cashback 20%',
      subtitle: 'OjolPay only',
      color: 'bg-blue-500',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'food',
      title: "McDonald's Delivery",
      time: '2 hours ago',
      amount: 'Rp 45.000',
    },
    {
      id: 2,
      type: 'ride',
      title: 'Ride to Mall',
      time: '1 day ago',
      amount: 'Rp 18.500',
    },
    {
      id: 3,
      type: 'send',
      title: 'Document Delivery',
      time: '2 days ago',
      amount: 'Rp 12.000',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-white px-6 py-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-red-500 rounded-full items-center justify-center mr-3">
                <Text className="text-white font-bold text-lg">M</Text>
              </View>
              <View>
                <Text className="text-gray-800 font-semibold text-base">
                  Good morning!
                </Text>
                <Text className="text-gray-500 text-sm">Muhammad Nur</Text>
              </View>
            </View>
            <TouchableOpacity className="relative">
              <Icon name="bell" size={20} color="#6B7280" />
              <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
            <Icon name="search" size={16} color="#9CA3AF" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Where do you want to go?"
              placeholderTextColor="#9CA3AF"
              className="flex-1 text-gray-800 ml-3"
            />
          </View>
        </View>

        {/* Balance Card */}
        <View className="mx-6 my-4">
          <View className="bg-red-500 rounded-2xl p-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-white/80 text-sm mb-1">
                  OjolPay Balance
                </Text>
                <Text className="text-white text-2xl font-bold">
                  Rp 127,500
                </Text>
              </View>
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-lg">
                <Text className="text-white font-medium">Top Up</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row mt-4 space-x-4">
              <TouchableOpacity className="flex-row items-center">
                <Icon name="plus" size={14} color="#fff" />
                <Text className="text-white ml-2 text-sm">Add Money</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center">
                <Icon name="qrcode" size={14} color="#fff" />
                <Text className="text-white ml-2 text-sm">Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Services Grid */}
        <View className="bg-white mx-6 rounded-2xl p-6 mb-4">
          <Text className="text-gray-800 font-bold text-lg mb-4">Services</Text>
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
        <View className="px-6 mb-4">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Promotions
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {promos.map(promo => (
                <TouchableOpacity
                  key={promo.id}
                  className={`${promo.color} rounded-2xl p-4 w-64`}>
                  <Text className="text-white font-bold text-base mb-1">
                    {promo.title}
                  </Text>
                  <Text className="text-white/80 text-sm">
                    {promo.subtitle}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View className="bg-white mx-6 rounded-2xl p-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-gray-800 font-bold text-lg">
              Recent Activity
            </Text>
            <TouchableOpacity>
              <Text className="text-red-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          {recentActivities.map(activity => (
            <TouchableOpacity
              key={activity.id}
              className="flex-row items-center py-3 border-b border-gray-100 last:border-b-0">
              <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                <Icon
                  name={
                    activity.type === 'food'
                      ? 'utensils'
                      : activity.type === 'ride'
                      ? 'motorcycle'
                      : 'box'
                  }
                  size={16}
                  color="#6B7280"
                />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium text-base">
                  {activity.title}
                </Text>
                <Text className="text-gray-500 text-sm">{activity.time}</Text>
              </View>
              <Text className="text-gray-800 font-semibold">
                {activity.amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="px-6 mb-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Quick Actions
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
              <Icon name="history" size={24} color="#EF4444" />
              <Text className="text-gray-700 font-medium mt-2">History</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
              <Icon name="heart" size={24} color="#EF4444" />
              <Text className="text-gray-700 font-medium mt-2">Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 items-center">
              <Icon name="headset" size={24} color="#EF4444" />
              <Text className="text-gray-700 font-medium mt-2">Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
