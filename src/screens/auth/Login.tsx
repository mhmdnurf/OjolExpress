import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStackParamList} from '../../types/navigationType';

type LoginNavigation = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginNavigation;
}

export default function Login({navigation}: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter your username or phone number');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to main app
      Alert.alert('Success', 'Login successful!', [
        {
          text: 'OK',
          onPress: () => navigation.replace('Dashboard'),
        },
      ]);
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="pt-16 pb-12 px-6">
            {/* Logo */}
            <View className="items-center mb-8">
              <View className="w-16 h-16 bg-red-500 rounded-2xl items-center justify-center mb-4">
                <Icon name="motorcycle" size={28} color="#fff" />
              </View>
            </View>

            {/* Welcome Text */}
            <View className="mb-8">
              <Text className="text-3xl font-bold text-gray-800 mb-2">
                Welcome back!
              </Text>
              <Text className="text-gray-500 text-base leading-6">
                Sign in to your account to continue
              </Text>
            </View>

            {/* Login Form */}
            <View className="mb-8 space-y-6">
              {/* Username/Phone Input */}
              <View>
                <Text className="text-gray-700 font-semibold mb-3 text-base">
                  Username or Phone Number
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200 px-4 py-4">
                  <Icon name="user" size={18} color="#6B7280" />
                  <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter username or phone number"
                    placeholderTextColor="#9CA3AF"
                    className="text-gray-800 font-medium ml-3"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Password Input */}
              <View>
                <Text className="text-gray-700 font-semibold my-3 text-base">
                  Password
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200 px-4 py-4">
                  <Icon name="lock" size={18} color="#6B7280" />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showPassword}
                    className="flex-1 text-gray-800 font-medium ml-3"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="ml-2">
                    <Icon
                      name={showPassword ? 'eye-slash' : 'eye'}
                      size={18}
                      color="#6B7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity className="items-end">
                <Text className="text-red-500 font-medium mt-3">
                  Lupa Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={isLoading || !username.trim() || !password.trim()}
              className={`py-4 rounded-xl mb-6 ${
                isLoading || !username.trim() || !password.trim()
                  ? 'bg-gray-300'
                  : 'bg-red-500'
              }`}>
              <View className="flex-row items-center justify-center">
                {isLoading && (
                  <View className="mr-2">
                    <Icon name="spinner" size={16} color="#fff" />
                  </View>
                )}
                <Text className="text-white font-semibold text-base">
                  {isLoading ? 'Login...' : 'Login'}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-400 px-4 text-sm">
                or continue with
              </Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Social Login Options */}
            <View className="space-y-3">
              <TouchableOpacity className="flex-row items-center justify-center py-4 border border-gray-200 rounded-xl">
                <Icon name="google" size={20} color="#DB4437" />
                <Text className="text-gray-700 font-medium ml-3">
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Section */}
          <View className="mt-auto px-6 pb-8">
            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center mb-4">
              <Text className="text-gray-500">Don't have an account? </Text>
              <TouchableOpacity>
                <Text className="text-red-500 font-semibold">Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Terms and Privacy */}
            <Text className="text-center text-gray-400 text-sm leading-5 mb-6">
              By continuing, you agree to our{' '}
              <Text className="text-red-500 font-medium">Terms of Service</Text>{' '}
              and{' '}
              <Text className="text-red-500 font-medium">Privacy Policy</Text>
            </Text>

            {/* Help */}
            <TouchableOpacity className="items-center">
              <Text className="text-red-500 font-medium">
                Need help signing in?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
  },
});
