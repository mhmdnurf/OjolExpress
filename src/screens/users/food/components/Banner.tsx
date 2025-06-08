import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type BannerProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function Banner({searchQuery, setSearchQuery}: BannerProps) {
  return (
    <>
      {/* Banner */}
      <View className="px-4 mb-4">
        <View className="bg-white/10 rounded-2xl p-4">
          <View className="flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-white text-lg font-bold">
                Hungry? Let's find food! 🍽️
              </Text>
              <Text className="text-white/80 text-sm">
                Discover amazing restaurants near you
              </Text>
            </View>
            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center">
              <Icon name="utensils" size={20} color="#fff" />
            </View>
          </View>

          {/* Search Bar */}
          <View className="bg-white rounded-full px-4 py-3 flex-row items-center">
            <Icon name="search" size={16} color="#9CA3AF" />
            <TextInput
              placeholder="Search for restaurants or dishes"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 text-gray-800 ml-3 text-sm"
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery('')}>
                <Icon name="times-circle" size={16} color="#9CA3AF" />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </>
  );
}
