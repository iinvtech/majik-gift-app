import {Image, StyleSheet, View} from 'react-native';

import {Typography} from '../index';
import {sizer} from '../../helpers';
import {CatagorySvg} from '../../assets';

const Catagories = ({mT = 0, item}) => {
  return (
    <View style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
      <View style={styles.circle}>
        {/* <Image
          source={
            item?.image
              ? {uri: item?.image}
              : require('../../assets/images/card.png')
          }
          style={styles.imageStyle}
        /> */}

        <CatagorySvg />
      </View>

      <Typography size={10} textAlign="center" mT={7}>
        {item?.name}
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
  imageStyle: {
    objectFit: 'cover',
    width: sizer.moderateScale(24),
    borderRadius: 100,
    height: sizer.moderateVerticalScale(24),
  },
});
