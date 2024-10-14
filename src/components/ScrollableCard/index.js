import React, {useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

import {Typography, Button, Flex} from '../index';
import {BlackStarSvg, Stars} from '../../assets';
import {COLORS, paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';
import {PRODUCT_SUGGESTIONS} from '../data';

const ScrollableCard = ({data = PRODUCT_SUGGESTIONS, home}) => {
  const {width} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.main,
          {
            width: width - 60,
            backgroundColor: home ? COLORS.secondary : COLORS.primary,
          },
        ]}>
        <View
          style={{
            position: 'absolute',
            top: sizer.moderateVerticalScale(10),
            right: sizer.moderateScale(16),
          }}>
          <BlackStarSvg />
        </View>

        <View
          style={{
            position: 'absolute',
            top: sizer.moderateVerticalScale(10),
            left: sizer.moderateScale(16),
          }}>
          <BlackStarSvg width={8} height={8} />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: sizer.moderateVerticalScale(10),
            right: sizer.moderateScale(110),
          }}>
          <BlackStarSvg width={9} height={9} />
        </View>

        <Flex justifyContent="space-between">
          <View style={{width: '65%'}}>
            <Typography
              mT={6}
              size={22}
              color={home ? COLORS.white : COLORS.black}
              bold
              fontType="secondary">
              {item.title}
            </Typography>

            <Typography mT={6} light color={home ? COLORS.white : COLORS.black}>
              {item.category}
            </Typography>

            <Button
              label="Buy Now"
              height={25}
              width={100}
              Icon={<Stars width={11} height={11} />}
              mT={21}
              textSize={14}
              gap={3}
              bgColor={home ? COLORS.primary : COLORS.secondary}
            />
          </View>

          <Image
            source={{
              uri: item.image,
            }}
            style={{
              width: sizer.moderateScale(100),
              height: '100%',
              objectFit: 'fill',
            }}
          />
        </Flex>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={onScroll}
      />

      <Flex mT={9} justifyContent="center" gap={4}>
        {data.map((_, index) => (
          <View
            key={index}
            style={{
              width: sizer.moderateScale(5),
              height: sizer.moderateVerticalScale(5),
              backgroundColor:
                activeIndex === index ? COLORS.primary : '#D9D9D9',
              borderRadius: 100,
            }}
          />
        ))}
      </Flex>
    </>
  );
};

export default ScrollableCard;

const styles = StyleSheet.create({
  main: {
    marginTop: sizer.moderateVerticalScale(24),
    borderRadius: 19,
    padding: sizer.moderateScale(16),
    backgroundColor: COLORS.primary,
    marginHorizontal: paddingHorizontal,
  },
});
