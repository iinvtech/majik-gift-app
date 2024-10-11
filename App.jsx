import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/drawer-stack';
import RootNavigation from './src/navigation/root-navigation';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Open Drawer"
//         onPress={() => navigation.openDrawer()} // Opens the drawer
//       />
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function HomeTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="HomeTabs"
//       screenOptions={{
//         headerShown: false,
//         swipeEnabled: false,
//       }}>
//       <Drawer.Screen name="HomeTabs" component={HomeTabNavigator} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//     </Drawer.Navigator>
//   );
// }

// App Component
export default function App() {
  return <RootNavigation />;
}
