import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  ChatScreen,
  EventDetail,
  Events,
  LightworkerDetail,
  MessageInbox,
  Notifications,
  OrderDetail,
  OrderSummary,
  Search,
  Subscription,
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
      <Drawer.Screen name="LightworkerDetail" component={LightworkerDetail} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="MessageInbox" component={MessageInbox} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
