import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  EventDetail,
  Events,
  OrderDetail,
  OrderSummary,
  Wishlist,
} from '../../screens';
import {sizer} from '../../helpers';
import TabNavigator from '../tab-navigator';
import CustomDrawerContent from '../../customContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: sizer.moderateScale(250),
        },
      }}>
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
      <Drawer.Screen name="OrderSummary" component={OrderSummary} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="OrderDetail" component={OrderDetail} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="EventDetail" component={EventDetail} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
