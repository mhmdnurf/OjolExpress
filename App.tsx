import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/navigationType';
import Splash from './src/screens/Splash';
import MapScreen from './src/screens/MapScreen';
import Login from './src/screens/auth/Login';
import UserTab from './src/components/navigation/UserTab';
import IndexFood from './src/screens/users/food/screens/IndexFood';
import FoodDetail from './src/screens/users/food/screens/FoodDetail';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="IndexFood"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Home" component={UserTab} />
          <Stack.Screen name="IndexFood" component={IndexFood} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
