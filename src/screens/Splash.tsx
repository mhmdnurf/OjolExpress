import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../types/navigationType';
import '../../global.css'; // Import global styles

type NavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface SplashProps {
  navigation: NavigationProp;
}

export default function Splash({navigation}: SplashProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace('Dashboard');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <>
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-sky-500 font-extrabold">
          Ojol Express
        </Text>
      </View>
    </>
  );
}
