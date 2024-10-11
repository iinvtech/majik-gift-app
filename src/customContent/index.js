import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer as PaperDrawer} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {BackButton} from '../components';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <BackButton mH={false} />

      <PaperDrawer.Section>
        <PaperDrawer.Item
          label="Inbox"
          icon="inbox"
          onPress={() => navigation.navigate('Inbox')}
        />
        <PaperDrawer.Item
          label="Events"
          icon="calendar"
          onPress={() => navigation.navigate('Events')}
        />
        <PaperDrawer.Item
          label="Wishlist"
          icon="heart-outline"
          onPress={() => navigation.navigate('Wishlist')}
        />
        <PaperDrawer.Item
          label="Subscriptions"
          icon="subscription"
          onPress={() => navigation.navigate('Subscriptions')}
        />
        <PaperDrawer.Item
          label="Order Details"
          icon="cart-outline"
          onPress={() => navigation.navigate('OrderDetails')}
        />
        <PaperDrawer.Item
          label="Logout"
          icon="logout"
          onPress={() => console.log('Logging out...')}
        />
      </PaperDrawer.Section>
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
  userInfo: {
    marginLeft: 12,
  },
});
