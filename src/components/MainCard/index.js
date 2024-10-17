import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Typography, Flex} from '../index';
import {HeartIcon} from '../../assets';
import {baseOpacity, COLORS, placeholder_img} from '../../../globals';
import {sizer} from '../../helpers';

const MainCard = ({
  mT = 0,
  item,
  navigationRoute = 'EventDetail',
  width = false,
  onPress = () => {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={baseOpacity}
      onPress={onPress}
      style={[
        styles.main,
        {
          width: width ? 163 : '48%',
          marginTop: sizer.moderateVerticalScale(mT),
          marginBottom: sizer.moderateVerticalScale(24),
        },
      ]}>
      <Image
        source={
          item?.banner_image
            ? {uri: item?.banner_image || placeholder_img}
            : require('../../assets/images/card.png')
        }
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
        <Flex justifyContent="space-between" gap={6}>
          <Typography numberOfLines={2} style={{width: '80%'}} size={14}>
            {item?.name || '---'}
          </Typography>
          <Flex gap={2} mT={2} style={{width: '19%'}}>
            <Image source={require('../../assets/images/star.png')} />
            <Typography size={10}>{item?.rating}</Typography>
          </Flex>
        </Flex>

        {item?.description && (
          <Typography numberOfLines={2} size={10} light mT={8}>
            {item?.description}
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
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: sizer.moderateVerticalScale(10),
  },
  imageStyle: {
    objectFit: 'cover',
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
    width: sizer.moderateScale(16),
    height: sizer.moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
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
