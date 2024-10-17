import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';

import {
  baseOpacity,
  COLORS,
  paddingHorizontal,
  placeholder_profile,
} from '../../../globals';
import {sizer} from '../../helpers';
import {Flex, Typography} from '../';
import {HorizontalEllipsis, NotificationIcon} from '../../assets';


const Header = () => {
  const navigation = useNavigation();
  const {user} = useSelector(store => store?.storeReducer);

  return (
    <View style={styles.main}>
      <Flex alignItems="center" justifyContent="center" style={{flex: 1}}>
        <Avatar.Image
          source={{uri: user?.details?.profile_image || placeholder_profile}}
          size={42}
          style={{backgroundColor: COLORS.white}}
        />
        <View style={styles.welcomeMessage}>
          <Typography size={12} fontType="secondary" letterSpacing={1} bold>
            Welcome 👋🏼{' '}
          </Typography>
          <Typography size={12}>
            {user?.details?.first_name + ' ' + user?.details?.last_name ||
              'user'}
          </Typography>
        </View>

        <Flex alignItems="center" gap={11}>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <NotificationIcon width={24} height={24} />
          </TouchableOpacity>

          <TouchableOpacity
            hitSlop={styles.hitSlop}
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <HorizontalEllipsis />
          </TouchableOpacity>
        </Flex>
      </Flex>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateScale(63),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: '#fff',
    paddingHorizontal: paddingHorizontal,
    marginHorizontal: -paddingHorizontal,
  },
  welcomeMessage: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: sizer.moderateScale(12),
    gap: 2,
  },
  hitSlop: {
    bottom: 5,
    right: 5,
    left: 5,
    top: 5,
  },
});
