import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Map: undefined;
  Home: undefined;
  IndexFood: undefined;
  FoodDetail: {
    merchantId: number;
    merchantName: string;
    merchantImage: ImageSourcePropType;
  };
};

export type BottomStackParamsList = {
  Dashboard: undefined;
  Promo: undefined;
  Activity: undefined;
  Profile: undefined;
};
