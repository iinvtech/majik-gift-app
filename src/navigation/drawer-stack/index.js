import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from '../../screens';

import TabNavigator from '../tab-navigator';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}>
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
