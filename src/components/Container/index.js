import {StyleSheet, View} from 'react-native';

import {sizer} from '../../helpers';
import {COLORS} from '../../../globals';

const Container = ({children, style}) => {
  return <View style={[styles.main, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: sizer.moderateScale(25),
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
