import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Typography, Flex} from '../index';
import {HeartIcon} from '../../assets';
import {baseOpacity, COLORS} from '../../../globals';
import {sizer} from '../../helpers';

const MainCard = ({mT = 0, item}) => {
  return (
    <TouchableOpacity
      activeOpacity={baseOpacity}
      onPress={() => {}}
      style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
      <Image
        source={require('../../assets/images/card.png')}
        style={styles.imageStyle}
      />

      {item?.isOnSale && (
        <View style={styles.discountBadge}>
          <Typography size={10}>20% Off</Typography>
        </View>
      )}

      <View style={styles.heartIconContainer}>
        <HeartIcon />
      </View>

      <View style={styles.contentView}>
        <Flex justifyContent="space-between">
          <Typography size={14}>{item?.name || '---'}</Typography>
          <Flex gap={2}>
            <Image source={require('../../assets/images/star.png')} />
            <Typography size={10}>{item?.rating}</Typography>
          </Flex>
        </Flex>

        {item?.category && (
          <Typography size={10} light mT={8}>
            {item?.category}
          </Typography>
        )}

        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={styles.priceSection}>
          <Typography size={14} bold>
            ${item?.price}.00
          </Typography>
          {item?.isOnSale && (
            <Typography size={10} color="#8B8B8B">
              ${item?.originalPrice}.00
            </Typography>
          )}
        </Flex>
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  main: {
    width: sizer.moderateVerticalScale(163),
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: sizer.moderateVerticalScale(10),
  },
  imageStyle: {
    objectFit: 'contain',
    width: '100%',
    height: sizer.moderateVerticalScale(144),
    marginTop: sizer.moderateVerticalScale(5),
  },
  discountBadge: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    padding: sizer.moderateScale(4),
    alignSelf: 'flex-start',
    marginTop: sizer.moderateVerticalScale(2),
    top: sizer.moderateVerticalScale(15),
    left: sizer.moderateScale(15),
  },
  heartIconContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    padding: sizer.moderateScale(5),
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginTop: sizer.moderateVerticalScale(2),
    top: sizer.moderateVerticalScale(15),
    right: sizer.moderateScale(15),
  },
  contentView: {
    paddingHorizontal: sizer.moderateScale(6),
    marginTop: sizer.moderateVerticalScale(10),
  },
  priceSection: {
    marginTop: sizer.moderateVerticalScale(10),
    marginBottom: sizer.moderateVerticalScale(10),
  },
});
