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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <BackButton mH={false} />

      <TouchableOpacity activeOpacity={baseOpacity} style={styles.drawerItem}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemMsg />
          <Typography>Inbox</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={baseOpacity} style={styles.drawerItem}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemEvents />
          <Typography>Events</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={baseOpacity} style={styles.drawerItem}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemWishlist />
          <Typography>Wishlist</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={baseOpacity} style={styles.drawerItem}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemSubscription />
          <Typography>Subscriptions</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={baseOpacity}
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate('OrderSummary');
        }}>
        <Flex gap={18} alignItems="center" style={{flex: 1}}>
          <DrawerItemOrderDetail />
          <Typography>Order Details</Typography>
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={baseOpacity} style={styles.drawerItem}>
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
