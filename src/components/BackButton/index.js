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
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.goBack();
            }}>
            <BackIcon />
          </TouchableOpacity>
          {title && <Typography letterSpacing={0.1}>{title}</Typography>}
        </Flex>

        {Icon && <Icon />}
      </Flex>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateScale(63),
    elevation: 8,
    backgroundColor: '#fff',
    paddingHorizontal: paddingHorizontal,
  },
});
