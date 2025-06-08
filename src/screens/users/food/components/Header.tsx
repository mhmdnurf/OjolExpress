import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type HeaderProps = {
  onClosePress: () => void;
};
export default function Header({onClosePress}: HeaderProps) {
  return (
    <>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <Pressable
              className="bg-white rounded-full w-12 h-12 justify-center items-center mr-4"
              onPress={onClosePress}>
              <Icon name="times" size={20} color="grey" />
            </Pressable>

            <View className="bg-black/20 rounded-full px-4 py-2">
              <View className="flex-row items-center">
                <Icon name="map-marker-alt" size={16} color="#fff" />
                <Text className="text-white text-lg font-semibold ml-2">
                  Jl. Ganet
                </Text>
              </View>
            </View>
          </View>
          <Pressable className="bg-white rounded-full w-12 h-12 justify-center items-center">
            <Icon name="receipt" size={20} color="grey" />
          </Pressable>
        </View>
      </View>
    </>
  );
}
