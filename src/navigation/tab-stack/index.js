import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Home, Lightworker, Profile} from '../../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Home',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const LightworkerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Lightworker',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Lightworker" component={Lightworker} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Profile',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {HomeStack, ProfileStack, LightworkerStack};
