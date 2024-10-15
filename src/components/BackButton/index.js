import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Flex, Typography} from '../';
import {BackIcon} from '../../assets';
import {sizer} from '../../helpers';
import {baseOpacity, paddingHorizontal} from '../../../globals';

const BackButton = ({title, Icon, mH = true}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.main, mH && {marginHorizontal: -paddingHorizontal}]}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        style={{flex: 1}}>
        <Flex gap={8}>
          <TouchableOpacity
            hitSlop={{bottom: 5, right: 5, left: 5, top: 5}}
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.goBack();
            }}>
            <BackIcon />
          </TouchableOpacity>
          {title && <Typography letterSpacing={0.1}>{title}</Typography>}
        </Flex>

        {Icon && (
          <TouchableOpacity
            hitSlop={{bottom: 5, right: 5, left: 5, top: 5}}
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <Icon />
          </TouchableOpacity>
        )}
      </Flex>
    </View>
  );
};

export default BackButton;

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
  },
});
