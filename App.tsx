import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/navigationType';
import Splash from './src/screens/Splash';
import MapScreen from './src/screens/MapScreen';
import Login from './src/screens/auth/Login';
import UserTab from './src/components/navigation/UserTab';
import IndexFood from './src/screens/users/food/IndexFood';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Home" component={UserTab} />
          <Stack.Screen name="IndexFood" component={IndexFood} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
