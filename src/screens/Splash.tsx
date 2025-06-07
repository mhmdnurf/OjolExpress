import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Animated, Platform, StatusBar} from 'react-native';
import {RootStackParamList} from '../types/navigationType';
import Icon from 'react-native-vector-icons/FontAwesome5';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface SplashProps {
  navigation: NavigationProp;
}

export default function Splash({navigation}: SplashProps) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.3)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim, slideAnim]);

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
      )}
      <View className="flex-1 bg-red-600">
        {/* Gradient Background */}
        <View className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700" />

        {/* Decorative Circles */}
        <View className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full" />
        <View className="absolute top-1/3 -left-16 w-32 h-32 bg-white/5 rounded-full" />
        <View className="absolute -bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full" />

        {/* Main Content */}
        <View className="flex-1 justify-center items-center px-8">
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{scale: scaleAnim}],
            }}
            className="items-center mb-8">
            {/* Logo/Icon Placeholder */}
            <View className="w-24 h-24 bg-white rounded-2xl items-center justify-center mb-6 shadow-lg">
              <View className="w-12 h-12 bg-red-500 rounded-xl items-center justify-center">
                <Icon name="motorcycle" size={24} color="#fff" />
              </View>
            </View>

            {/* App Name */}
            <Text className="text-4xl text-white font-black tracking-wide mb-2">
              Ojol Express
            </Text>
          </Animated.View>

          {/* Tagline */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{translateY: slideAnim}],
            }}>
            <Text className="text-white/80 text-lg font-medium text-center leading-6">
              Butuh Apa Saja? Kami Datang!
            </Text>
            <Text className="text-white/60 text-base text-center mt-2">
              Dari makanan, barang, hingga kebutuhan harianmu
            </Text>
          </Animated.View>

          {/* Loading Indicator */}
          <Animated.View
            style={{opacity: fadeAnim}}
            className="absolute bottom-20">
            <View className="flex-row space-x-2">
              {[0, 1, 2].map(index => (
                <Animated.View
                  key={index}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  style={{
                    transform: [
                      {
                        scale: fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        }),
                      },
                    ],
                  }}
                />
              ))}
            </View>
          </Animated.View>
        </View>

        {/* Bottom Wave Effect */}
        <View className="absolute bottom-0 left-0 right-0 h-32">
          <View className="absolute bottom-0 left-0 right-0 h-20 bg-white/5 rounded-t-3xl" />
          <View className="absolute bottom-0 left-4 right-4 h-12 bg-white/10 rounded-t-2xl" />
        </View>
      </View>
    </>
  );
}
