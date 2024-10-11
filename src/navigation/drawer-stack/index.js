import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from '../../screens';

import TabNavigator from '../tab-navigator';
import CustomDrawerContent from '../../customContent';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
      }}>
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
