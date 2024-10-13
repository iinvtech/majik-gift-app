import {StyleSheet, View} from 'react-native';

import {Typography} from '../index';
import {sizer} from '../../helpers';
import {CatagorySvg} from '../../assets';

const Catagories = ({mT = 0}) => {
  return (
    <View style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
      <View style={styles.circle}>
        <CatagorySvg />
      </View>

      <Typography size={10} textAlign="center" mT={7}>
        Classes & Workshops
      </Typography>
    </View>
  );
};

export default Catagories;

const styles = StyleSheet.create({
  main: {
    width: sizer.moderateScale(56),
    alignItems: 'center',
  },
  circle: {
    width: sizer.moderateScale(53),
    height: sizer.moderateScale(53),
    borderRadius: 100,
    backgroundColor: '#D3AFC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
