import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {BackButton, Flex, Typography} from '../components';
import {
  DrawerItemEvents,
  DrawerItemLogout,
  DrawerItemMsg,
  DrawerItemOrderDetail,
  DrawerItemSubscription,
  DrawerItemWishlist,
} from '../assets';
import {baseOpacity} from '../../globals';
import {sizer} from '../helpers';
import {useDispatch} from 'react-redux';
import {logout} from '../store/reducer';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <BackButton mH={false} />

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('MessageInbox');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemMsg />
          <Typography>Inbox</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('Events');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemEvents />
          <Typography>Events</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('Wishlist');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemWishlist />
          <Typography>Wishlist</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('Subscription');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemSubscription />
          <Typography>Subscriptions</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemOrderDetail />
          <Typography>Order Details</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          dispatch(logout());
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemLogout />
          <Typography>Logout</Typography>
        </Flex>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  drawerItem: {
    height: sizer.moderateVerticalScale(61),
    borderBottomWidth: sizer.moderateScale(0.5),
    borderBottomColor: '#EBEBEB',
    paddingHorizontal: sizer.moderateScale(25),
  },
  userInfo: {
    marginLeft: 12,
  },
});
