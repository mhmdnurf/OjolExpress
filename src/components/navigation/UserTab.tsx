import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomStackParamsList} from '../../types/navigationType';
import Dashboard from '../../screens/users/Dashboard';
import Promo from '../../screens/users/Promo';
import Activity from '../../screens/users/Activity';
import Profile from '../../screens/users/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="home" size={size} color={color} />
);

const PromoIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="ticket-percent" size={size} color={color} />
);

const ActivityIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="clock-outline" size={size} color={color} />
);

const ProfileIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="account" size={size} color={color} />
);

export default function UserTab() {
  const Tab = createBottomTabNavigator<BottomStackParamsList>();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EF4444', // Red-500
        tabBarInactiveTintColor: '#9CA3AF', // Gray-400
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F3F4F6',
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : 5,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 65 + insets.bottom : 65,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 2,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarIcon: PromoIcon,
          tabBarLabel: 'Promo',
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ActivityIcon,
          tabBarLabel: 'Activity',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
